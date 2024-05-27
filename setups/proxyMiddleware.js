const { createProxyMiddleware } = require('http-proxy-middleware');

exports.setupProxy = (app, routes) => {
    routes.forEach(route => {
        app.use(route.url, createProxyMiddleware(route.proxy))
    })
}