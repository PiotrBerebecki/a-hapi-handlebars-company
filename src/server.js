const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');

const routes = require('./routes');
const configureHandlebars = require('./configureHandlebars');


const server = new hapi.Server();


server.connection({
  // host: process.env.HOSTNAME || 'localhost', // Heroku fails to bind part
  port: process.env.PORT || 3000,
});


server.register([inert, vision], err => {
  if (err) { throw err; }
  server.route(routes);
  server.views(configureHandlebars);
});


module.exports = server;
