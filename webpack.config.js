const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const src = __dirname + '/src'
const dist = __dirname + '/dist'

module.exports = (env, argv) => {
  const PROD = argv.mode === 'production'

  return {
    mode: 'development',
    context: src,
    entry: {
      app: './js/App.tsx',
    },
    output: {
      filename: 'js/[name].bundle.js',
      path: dist,
      publicPath: '/',
    },
    devtool: PROD ? 'none': 'source-map',
    resolve: {
      extensions: [
        '.ts',
        '.tsx',
        '.js',
      ],
    },
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
      minimizer: PROD ? [
        new TerserPlugin({
          terserOptions: {
            compress: { drop_console: true }
          },
        }),
      ] : [],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
      new HtmlWebpackPlugin({
        filename: `${dist}/index.html`,
        template: './html/index.html',
      }),
    ],
  }
}

