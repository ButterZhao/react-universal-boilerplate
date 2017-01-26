const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    context: path.resolve(__dirname, '..'),
    entry: {
        bundle: [
            './client',
            'webpack-hot-middleware/client',
        ],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux-saga',
            'superagent'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: '[name].js',
        // chunkFilename: 'chunk.[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
              plugins: ['transform-runtime', 'add-module-exports']
          }
        }, {
          test: /\.scss$/,
          loaders: ['style', 'css?module&localIdentName=[name]__[local]__[hash:base64:8]', 'sass?module']
        }]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.scss']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
    ]
}
