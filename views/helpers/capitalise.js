const handlebars = require('handlebars');

handlebars.registerHelper('capitalise', function(string) {
  return string.toUpperCase();
});
