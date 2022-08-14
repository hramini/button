const { join } = require('path');
const { ProvidePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: join(__dirname, './src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
      {
        test: /\.(sass|scss|css)/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  watch: true,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new ProvidePlugin({
      React: 'react',
    }),
  ],
  devServer: {
    static: {
      directory: join(__dirname, './src'),
    },
    port: 4000,
    devMiddleware: {
      publicPath: '/dist/',
    },
    hot: 'only',
  },
};
