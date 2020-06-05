FROM node:14-alpine

RUN mkdir /app
WORKDIR /app

COPY server.js /app/server.js

CMD ["node", "app/server.js"]
