# establish base image & update node
# ------------------
FROM mongo:latest
#   RUN npm install -g npm@latest

# create & set working directory
# ------------------
#   RUN mkdir -p /usr/src
#   WORKDIR /usr/src

# copy host src directory
# ------------------
#   COPY . /usr/src

# start app
# ------------------
#   EXPOSE 3000
#   CMD npm run dev