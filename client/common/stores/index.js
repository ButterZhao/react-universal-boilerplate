// if (process.env.NODE_ENV === 'production') {
//     module.exports = require('./storeCreator.prd')
// } else {
//     module.exports = require('./storeCreator.dev')
// }
module.exports = process.env.NODE_ENV === 'production' ? require('./storeCreator.prd') : require('./storeCreator.dev');
