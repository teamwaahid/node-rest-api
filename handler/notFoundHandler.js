// dependencies

// module wrapper
const handler = {};

handler.notFoundHandler = (reqProps, cb) => {
  cb(404, 'This is Not Found Route Handler');
};

module.exports = handler;
