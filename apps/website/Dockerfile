FROM node:20-alpine as builder
RUN corepack enable

WORKDIR /app

COPY pnpm-lock.yaml /app

COPY . /app
RUN pnpm install --frozen-lockfile

RUN pnpx nuxt build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/.output .

ENV PORT=80

CMD ["node", "server/index.mjs"]