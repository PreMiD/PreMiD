import { extname, resolve } from "node:path";

import helmet from "@fastify/helmet";
import fastify, { RequestGenericInterface } from "fastify";
import { globby } from "globby";

export const app = fastify();

app.register(helmet);

app.get("/", (_, reply) => reply.send({ date: new Date() }));

interface versionRequest extends RequestGenericInterface {
	Params: {
		schemaName: string;
		version: string;
	};
}

const availableSchemas: Record<string, {
	version: string;
	content: Record<string, unknown>;
}[]> = {};

for (const schemaPath of await globby(resolve(import.meta.dirname, "../schemas/*/*.json"), { onlyFiles: true })) {
	const [schemaName, version] = schemaPath.split("/").slice(-2) as [string, string];

	let schemaVersions = availableSchemas[schemaName];

	if (!schemaVersions)
		schemaVersions = [];

	const { default: content } = await import(schemaPath, { with: { type: "json" } });
	schemaVersions.push({
		content,
		version: version.replace(extname(version), ""),
	});

	availableSchemas[schemaName] = schemaVersions;
}

app.get<versionRequest>("/:schemaName/:version", async (request, reply) => {
	const { schemaName, version } = request.params;

	if (!availableSchemas[schemaName]?.some(schema => schema.version === version))
		return reply.status(404).send({ error: "Schema not found." });

	return reply.send(availableSchemas[schemaName]?.find(schema => schema.version === version)?.content);
});

/* c8 ignore start */
if (process.env.NODE_ENV !== "test") {
	const url = await app.listen({
		host: process.env.HOST ?? "0.0.0.0",
		port: Number.parseInt(process.env.PORT || "80"),
	});

	// eslint-disable-next-line no-console
	console.log(`Listening on ${url}`);
}
/* c8 ignore stop */
