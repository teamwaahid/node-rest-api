// dependencies
const { homeRouteHandler } = require('./handler/homeRouteHandler');
const { userRouteHandler } = require('./handler/userRouteHandler');

// route obj
const routes = {
  home: homeRouteHandler,
  user: userRouteHandler,
};

module.exports = routes;
