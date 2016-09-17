var http = require('http');
var instanceId = guid();

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end(JSON.stringify({
    msg: 'Hello World!',
    instance: instanceId,
    request: guid()
  }));
};

var www = http.createServer(handleRequest);
www.listen(3000);

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
