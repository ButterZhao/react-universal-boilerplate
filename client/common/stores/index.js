if (process.env.NODE_ENV === 'production') {
    module.exports = require('./storeCreator.prod')
} else {
    module.exports = require('./storeCreator.dev')
}
