// dependencies

// module wrapper
const handler = {};

handler.homeRouteHandler = (reqProps, cb) => {
  cb(200, 'This is Home Route Handler');
};

module.exports = handler;
