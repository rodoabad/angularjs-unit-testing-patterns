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
        path: 'example'
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/api/pets',
    handler: function (request, reply) {
      reply({
        pets: [
          {
            name: 'birds',
            selected: false
          },
          {
            name: 'cats',
            selected: false
          },
          {
            name: 'dogs',
            selected: false
          },
          {
            name: 'reptiles',
            selected: false
          }
        ]
      });
    }
  });

  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });

});
