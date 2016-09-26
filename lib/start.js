var hapiServer = require('./server.js');
var hoek = require('hoek');
var port = process.env.PORT || 8000;

hapiServer.init(port, function (err, server) {

  hoek.assert(!err, err);
  console.log('The server is running on: ', server.info.uri);
});
