FROM armhf/node:5.3-slim
EXPOSE 3000
COPY server.js .
CMD node server.js
