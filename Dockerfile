FROM node:16-slim AS installer
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --no-progress && yarn cache clean
COPY . .
#RUN yarn run eslint

FROM installer AS local-dev
EXPOSE 6006 6016

FROM installer AS storybook-builder
RUN yarn build-storybook

FROM nginx:stable-alpine AS storybook
COPY --from=storybook-builder /app/storybook-static /usr/share/nginx/html