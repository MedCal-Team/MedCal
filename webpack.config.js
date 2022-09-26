const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "client", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  mode: "development",
  devServer: {
    hot: true,
    historyApiFallback: true,
    static: {
      // match the output path
      publicPath: '/dist', 
      directory: path.resolve(__dirname, 'dist'),
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api': 'http://localhost:3001'
    },
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        }
      },  
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "client", "index.html"),
    }),
  ],
}