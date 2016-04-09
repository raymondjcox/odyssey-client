var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require("./webpack.config.js");
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  contentBase: 'dist/',
  proxy: {
    "/assets*": "http://localhost:3000"
  }
});
server.listen(8080, "localhost", function() {});
