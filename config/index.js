if (process.env.NODE_ENV === 'production') {
    module.exports = require('./config.prd')
} else {
    module.exports = require('./config.dev')
}
