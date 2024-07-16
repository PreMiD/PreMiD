FROM node:20-alpine AS base
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME/bin:$PATH
RUN corepack enable

FROM base AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml /app/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm fetch --frozen-lockfile

COPY . /app

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --offline

RUN pnpm run -r codegen
RUN pnpm run build
RUN pnpm run -r build
RUN pnpm deploy --filter @premid/pd --prod /prod/pd
RUN pnpm deploy --filter @premid/schema-server --prod /prod/schema-server
RUN pnpm deploy --filter @premid/api --prod /prod/api

FROM base AS pd
WORKDIR /app

COPY --from=build /prod/pd /app
EXPOSE 80

CMD ["pnpm", "start"]

FROM base AS schema-server
WORKDIR /app

COPY --from=build /prod/schema-server /app
EXPOSE 80

CMD ["pnpm", "start"]

FROM base AS api
WORKDIR /app

COPY --from=build /prod/api /app
EXPOSE 3001

CMD ["pnpm", "start"]

FROM base AS website
WORKDIR /app

ENV PORT=80

COPY --from=build /app/apps/website/.output /app
EXPOSE 80

CMD ["node", "server/index.mjs"]