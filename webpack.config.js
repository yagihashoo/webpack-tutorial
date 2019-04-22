const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const src = __dirname + '/src'
const dist = __dirname + '/dist'

module.exports = (env, argv) => {
  const IS_DEV = argv.mode === 'development'

  return {
    mode: 'development',
    context: src,
    entry: {
      app: './js/app.js',
    },
    output: {
      filename: 'js/[name].bundle.js',
      path: dist,
      publicPath: '/',
    },
    devtool: IS_DEV ? 'source-map' : 'none',
    devServer: {
      inline: true,
      contentBase: dist,
      watchContentBase: true,
      hot: true,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
            enforce: true,
          },
        },
      },
      minimizer: IS_DEV
        ? []
        : [
          new TerserPlugin({
            terserOptions: {
              compress: { drop_console: true }
            },
          }),
        ],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { modules: false }]],
          },
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
      }),
      new HtmlWebpackPlugin({
        filename: `${dist}/index.html`,
        template: './html/index.html',
      }),
    ],
  }
}

