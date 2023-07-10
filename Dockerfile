FROM node:16-alpine

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8085

CMD ["npm", "start"]
