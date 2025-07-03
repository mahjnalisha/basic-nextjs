# Set the desire Node version
ARG NODE_VERSION=22
# Use Node image with Alpine as lot more lightweight than Debian
ARG BASE_IMAGE=alpine
FROM node:${NODE_VERSION}-${BASE_IMAGE}

RUN mkdir -p /basic-nextjs
WORKDIR /basic-nextjs

COPY package.json /basic-nextjs/package.json
RUN npm install


# RUN npm run build
COPY . /basic-nextjs
COPY  .next ./.next

# Although optional, always good practice to add EXPOSE here to document the port behavior
EXPOSE 3000
CMD [ "npm", "run", "dev" ]