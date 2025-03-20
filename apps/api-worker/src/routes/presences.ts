import { Presence } from "@premid/db";
import { type } from "arktype";
import type { FastifyReply, FastifyRequest } from "fastify";

const schema = type({
	service: "string.trim",
	file: "'metadata.json'|'presence.js'|'iframe.js'",
});

export async function presences(request: FastifyRequest, reply: FastifyReply) {
	const out = schema(request.params);

	if (out instanceof type.errors)
		return reply.status(400).send({ code: "INVALID_PARAMS", message: out.message });

	const service = decodeURIComponent(out.service);
	const { file } = out;

	const presence = await Presence.findOne({ "metadata.service": service });

	if (!presence)
		return reply.status(404).send({ code: "PRESENCE_NOT_FOUND", message: "The presence was not found" });

	switch (file) {
		case "metadata.json":
			return reply.status(200).type("application/json").send(presence.metadata);
		case "presence.js":
			return reply.status(200).type("application/javascript").send(presence.presenceJs);
		case "iframe.js":
			if (!presence.iframeJs)
				return reply.status(404).send({ code: "IFRAME_NOT_FOUND", message: "The presence does not have an iframe" });
			return reply.status(200).type("application/javascript").send(presence.iframeJs);
	}
}
