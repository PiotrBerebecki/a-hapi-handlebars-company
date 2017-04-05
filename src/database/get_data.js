const connect = require('./../../database-setup/database_connect');


const getData = {};
module.exports = getData;


getData.articles = (keyword, callback) => {
  connect.query(`
    SELECT title FROM articles
    WHERE LOWER(title) LIKE '%${keyword}%'`, (err, response) => {
    if (err) { return callback(err); }
    callback(null, response.rows);
  });
};
