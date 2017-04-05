const getData = require('../database/get_data');

const pages = [
  { path: '/', name: 'all articles', keyword: '' },
  { path: '/javascript', name: 'javascript', keyword: 'javascript' },
  { path: '/react', name: 'react', keyword: 'react' },
];


module.exports = pages.map(page => {
  return {
    method: 'GET',
    path: page.path,
    handler: (request, reply) => {

      getData.articles(page.keyword, (dbError, articles) => {
        if (dbError) {
          console.log('=====views.js', dbError);
        }

        // console.log('=====', articles);
        let data = {
          articles,
          pages,
          pageName: page.name
        };

        reply.view('index', data);
      });
    }
  };
});
