FROM node:14
COPY . .
RUN npm install
RUN npm run build
WORKDIR ./dist
EXPOSE 3003
CMD [ "node", "app.js" ]