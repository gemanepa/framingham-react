# specify the node base image with your desired version node:<version>
FROM node:10

# replace this with your application's default port
EXPOSE 3000

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
ADD package*.json ./
ADD .npmrc ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
ENTRYPOINT ["npm", "run", "dev"]