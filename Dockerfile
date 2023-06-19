# Dockerfile dev

FROM node:16.13.0

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3009

CMD ["yarn", "dev", "-p", "3009"]