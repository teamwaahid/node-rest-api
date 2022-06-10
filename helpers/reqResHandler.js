// dependencies
const url = require('url');

// module wrapper
const handler = {};

// request and response handler
handler.reqResHandler = (req, res) => {
  const method = req.method.toLowerCase();
  const headerObj = req.headders;
  const reqUrlObj = url.parse(req.url, true);
  const queryObj = reqUrlObj.query;
  const path = reqUrlObj.pathname;
  const formatedPath = path.replace(/^\/+|\/$/g, '');
  console.log(method);
  console.log(formatedPath);
};

module.exports = handler;
