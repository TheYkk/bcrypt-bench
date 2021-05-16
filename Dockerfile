FROM node:16.1-alpine
WORKDIR /app
COPY package.json .
RUN yarn 
COPY index.js .
CMD [ "node","index.js" ]