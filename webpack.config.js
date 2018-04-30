const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]_[hash:base64:5]"
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
      "process.env.API_BASE": JSON.stringify(process.env.API_BASE),
      "process.env.DEBUG": JSON.stringify(
        process.env.DEBUG || process.env.NODE_ENV !== "production")
    })
  ],
  devServer: {
    open: true
  }
}
