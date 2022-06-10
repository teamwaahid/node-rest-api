// dependencies
const http = require('http');
const { reqResHandler } = require('./helpers/reqResHandler');

// module wrapper
const app = {};

// configaration
app.config = {
  port: 4000,
};

// creating server
app.createServer = () => {
  const server = http.createServer(reqResHandler);

  server.listen(app.config.port, () => {
    console.log('server is running');
  });
};

// server initialized
app.createServer();
