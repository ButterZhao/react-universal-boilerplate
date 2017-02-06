/* eslint-disable */
require('babel-polyfill');

require('babel-register')({
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['add-module-exports']
});

require('css-modules-require-hook')({
    extensions: ['.scss'],
    preprocessCss: (data, filename) =>
        require('node-sass').renderSync({
            data,
            file: filename
        }).css,
    camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:8]'
});

require('asset-require-hook')({
    extensions: ['jpg', 'png', 'gif', 'webp'],
    limit: 8000
});

const config = require('../config');
const app = require('./app.js');
const port = config.Local.port;
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
const fs = require('fs');

compiler.plugin('emit', (compilation, callback) => {
    const assets = compilation.assets;
    let file, data;

    Object.keys(assets).forEach(key => {
        if (key.match(/\.html$/)) {
            file = path.resolve(__dirname, key);
            data = assets[key].source();
            fs.writeFileSync(file, data);
        }
    })
    callback();
})

app.use(views(path.resolve(__dirname, '../views/dev'), {map: {html: 'ejs'}}));
app.use(clientRoute);
app.use(router.routes());
app.use(router.allowedMethods());
console.log(`\n==>   Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`);
app.use(convert(devMiddleware(compiler, {
    // noInfo: true,
    publicPath: webpackCfg.output.publicPath
})));
app.use(convert(hotMiddleware(compiler)));

app.listen(port);
