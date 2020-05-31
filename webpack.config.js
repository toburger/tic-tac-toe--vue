const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env = {}) => ({
  mode: env.prod ? "production" : "development",
  devtool: env.prod ? "source-map" : "cheap-module-eval-source-map",
  entry: path.resolve(__dirname, "./src/main.ts"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.(svg|png)(\?[a-z0-9=&.]+)?$/,
        use: "base64-inline-loader?limit=1000&name=[name].[ext]",
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            // options: {
            //   modules: true,
            // },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".vue", ".json"],
    alias: {
      vue: "@vue/runtime-dom",
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({ patterns: [{ from: "./public" }] }),
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: "minimal",
    contentBase: path.join(__dirname, "./public"),
    overlay: true,
  },
});
