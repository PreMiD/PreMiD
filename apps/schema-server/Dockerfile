FROM node:20-alpine as build

WORKDIR /app

COPY package.json pnpm-lock.yaml /app/

RUN corepack enable && \
  pnpm install --frozen-lockfile

COPY . /app

RUN pnpm --filter @premid/schema-server build && \
  pnpm deploy --filter @premid/schema-server --prod deploy

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/deploy /app

USER node

CMD ["npm", "run", "start"]