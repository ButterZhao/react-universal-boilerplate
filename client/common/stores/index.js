if (process.env.NODE_ENV === 'production') {
    module.exports = require('./storeCreator.prd')
} else {
    module.exports = require('./storeCreator.dev')
}
