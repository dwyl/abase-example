var hapi = require('hapi');
var home = require('./home.js');

exports.init = function (port, next) {

  var server = new hapi.Server();
  server.connection({ port: port });

  server.route(home);

  server.start(function (err) {

    return next(err, server);
  });
};
