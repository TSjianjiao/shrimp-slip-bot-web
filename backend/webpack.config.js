const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const webpack = require('webpack')
let externals = _externals()

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    'server.min': path.join(__dirname, 'index.js'),
  },
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'serverDist'),
    filename: '[name].js',
    clean: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.join(__dirname)
    },
  },
  // 重要
  externals: externals,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                declaration: false
              }
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  },
  watch: true
}

function _externals () {
  let manifest = require('../package.json')
  let dependencies = manifest.dependencies
  let externals = {}
  for (let p in dependencies) {
    externals[p] = 'commonjs ' + p
  }
  return externals
}
