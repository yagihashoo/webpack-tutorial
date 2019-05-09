const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = __dirname + '/src'
const dist = __dirname + '/dist'

module.exports = (env, argv) => {
  const PROD = argv.mode === 'production'

  return {
    mode: 'development',
    context: src,
    entry: {
      app: './js/App.jsx'
    },
    output: {
      filename: 'js/[name].bundle.js',
      path: dist,
      publicPath: '/'
    },
    devtool: PROD ? 'none' : 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      inline: true,
      contentBase: dist,
      watchContentBase: true,
      hot: true
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
            enforce: true
          }
        }
      },
      minimizer: PROD
        ? [
            new TerserPlugin({
              terserOptions: {
                compress: { drop_console: true }
              }
            })
          ]
        : []
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
              ['@babel/preset-react', {}]
            ]
          }
        },
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            fix: true
          }
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.css$/,
          loader: 'styled-jsx-css-loader'
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      }),
      new HtmlWebpackPlugin({
        filename: `${dist}/index.html`,
        template: './html/index.html'
      })
    ]
  }
}
