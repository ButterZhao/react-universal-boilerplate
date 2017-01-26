require('babel-polyfill');

require('babel-register')({
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['add-module-exports']
});

// Css require hook
require('css-modules-require-hook')({
    extensions: ['.scss'],
    preprocessCss: (data, filename) =>
        require('node-sass').renderSync({
            data,
            file: filename
        }).css,
    // camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:8]'
})

const app = require('./app.js');
const port = process.env.port || 3000;
const clientRoute = require('./middlewares/clientRoute');
const devMiddleware = require('koa-webpack-dev-middleware');
const hotMiddleware = require('koa-webpack-hot-middleware');
const convert = require('koa-convert');
const webpackCfg = require('../build/webpack.dev.config');
const webpack = require('webpack');
const compiler = webpack(webpackCfg);
const router = require('./routes');
const views = require('koa-views');
const path = require('path');


app.use(views(path.resolve(__dirname, '../views'), {map: {html: 'ejs'}}));
app.use(clientRoute);
app.use(router.routes());
app.use(router.allowedMethods());
console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`);
app.use(convert(devMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackCfg.output.publicPath
})));
app.use(convert(hotMiddleware(compiler)));

app.listen(port);
