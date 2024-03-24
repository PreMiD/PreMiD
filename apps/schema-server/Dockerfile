FROM node:20-alpine as build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml /app/

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm fetch --frozen-lockfile

COPY . /app

RUN pnpm install --frozen-lockfile --offline

RUN pnpm --filter @premid/schema-server build && \
  pnpm deploy --filter @premid/schema-server deploy

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/deploy /app

USER node

CMD ["npm", "run", "start"]