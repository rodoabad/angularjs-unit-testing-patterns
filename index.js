var Hapi = require('hapi'),
  Inert = require('inert');

var server = new Hapi.Server();

server.register(Inert, function () {

  server.connection({
    host: 'localhost',
    port: 8000
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'example/client'
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/api/random',
    handler: function (request, reply) {
      reply({
        cats: 1,
        dogs: 2,
        cows: 3
      });
    }
  });

  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });

});
