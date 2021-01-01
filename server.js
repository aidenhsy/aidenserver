const http = require('http');

const routes = {
  '/': 'this is the landing page',
  '/hello': 'this is the hello page',
  '/bye': 'this is the good bye page',
};

// a server is any computer that runs an application which receives
// requests over the network it is on

http
  .createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (routes[req.url] === undefined) {
      res.end('404 not found');
      return;
    }
    res.end(routes[req.url]);
  })
  .listen(3000, () => {
    console.log('listening on 3000');
  });
