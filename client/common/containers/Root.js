if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Layout');
} else {
    module.exports = require('./Root.dev');
}
