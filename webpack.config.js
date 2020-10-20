const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const DIST = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    new: './src/new.js',
    deposit: './src/deposit.js',
    borrow_final: './src/borrow_final.js',
    token: './src/token.js',
    withdrawn: './src/withdrawn.js',
    depositt: './src/depositt.js',
    enter: './src/enter.js',

    // app: ['./src/index.js', './src/new.js'],
  },
  output: {
    filename: '[name]-bundle.js',
    path: DIST,
    publicPath: DIST,
  },

  devServer: {
    contentBase: DIST,
    port: 9011,
    writeToDisk: true,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

    // for build scripts
    new CopyPlugin({
      patterns: [
        {
          flatten: true,
          from: './src/*',
          globOptions: {
            ignore: ['**/*.js'],
          },
        },
      ],
    }),
  ],
}
