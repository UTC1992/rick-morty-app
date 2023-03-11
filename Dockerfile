# stage 1

FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

# stage 2

FROM nginx:alpine

COPY --from=build /app/dist/rick-morty-app /usr/share/nginx/html

EXPOSE 80
