FROM node:20-alpine as build

WORKDIR /app

COPY package.json pnpm-lock.yaml /app/

RUN corepack enable && \
  pnpm install --frozen-lockfile

COPY . /app

RUN pnpm --filter @premid/pd build && \
  pnpm deploy --filter @premid/pd deploy

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/deploy /app

USER node

CMD ["npm", "run", "start"]