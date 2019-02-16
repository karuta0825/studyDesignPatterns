const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: path.resolve(__dirname, "Main.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  devServer: {
    open: true
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          configFile: path.resolve(__dirname, "tsconfig.json")
        }
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  // .jsもないとwebpack-dev-serverが失敗する
  resolve: {
    extensions: [".ts", ".js"]
  }
};
