// dependencies

// module wrapper
const handler = {};

handler.userRouteHandler = (reqProps, cb) => {
  cb(200, 'This is User Route Handler');
};

module.exports = handler;
