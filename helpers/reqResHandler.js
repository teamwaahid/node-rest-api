// dependencies
const url = require('url');
const routes = require('./../routes');
const { notFoundHandler } = require('./../handler/notFoundHandler');

// module wrapper
const handler = {};

// request and response handler
handler.reqResHandler = (req, res) => {
  const method = req.method.toLowerCase();
  const headerObj = req.headers;
  const reqUrlObj = url.parse(req.url, true);
  const queryObj = reqUrlObj.query;
  const path = reqUrlObj.pathname;
  const formatedPath = path.replace(/^\/+|\/$/g, '');
  const acceptedContentType = ['application/json', 'text/plain'];
  let body = '';
  const reqProps = {
    method,
    headerObj,
    reqUrlObj,
    queryObj,
    path,
    formatedPath,
    body,
  };

  if (acceptedContentType.includes(headerObj['content-type'])) {
    const rawDataArray = [];

    req.on('data', buffer => {
      rawDataArray.push(buffer);
    });

    req.on('end', () => {
      body += Buffer.concat(rawDataArray).toString();

      const chosenHandler = routes[formatedPath]
        ? routes[formatedPath]
        : notFoundHandler;

      chosenHandler(reqProps, (statusCode, body) => {
        res.writeHead(statusCode);
        res.end(body);
      });
    });
  } else {
    res.end('content type is not acceptable');
  }
};

module.exports = handler;
