// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./Layout');
// } else {
//   module.exports = require('./Root.dev');
// }

module.exports = process.env.NODE_ENV === 'production' ? require('./Layout') : require('./Root.dev');
