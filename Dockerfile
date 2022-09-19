FROM node:alpine


WORKDIR /back

COPY package.json /back
COPY package-lock.json /back

RUN yarn install

COPY . .


RUN yarn build

EXPOSE 8888



CMD ["yarn", "start"]
