FROM armhf/node:5.3-slim
EXPOSE 8080
COPY server.js .
CMD node server.js
