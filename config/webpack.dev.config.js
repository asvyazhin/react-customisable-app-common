const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: '../app/index/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
    entry: './app/index/index.js',
    output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: 'app.bundle.js'
    },
    devServer: {
      contentBase: path.join(__dirname, 'app/assets'),
      compress: true,
      port: 9000
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
        {
            test: /\.css$/, use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }
            ]
        }
      ]
    },
    plugins: [HtmlWebpackPluginConfig]
  };