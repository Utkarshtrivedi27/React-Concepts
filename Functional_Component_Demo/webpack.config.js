const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js', // Entry point for your React application
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory (e.g., 'my-react-app/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Path to your HTML template
      filename: 'index.html', // Output HTML file name
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // File extensions to resolve (e.g., '.js', '.jsx')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Replace 'dist' with your content directory
    },
    port: 5500, // Port for the development server
  },
};
