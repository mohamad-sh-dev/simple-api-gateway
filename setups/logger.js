const morgan = require('morgan');

exports.setupLogger = (app) => {
    return app.use(morgan('combined'))
}