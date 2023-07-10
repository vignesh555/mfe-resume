const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/fonts/Kalam-Regular.ttf',
    createProxyMiddleware({
      target: 'http://localhost:8085',
      changeOrigin: true,
    })
  );
};