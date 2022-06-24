FROM node:16
WORKDIR ./delivapi
COPY package.json package-lock.json .
RUN npm install -g
COPY . .
EXPOSE 8081
CMD npm start