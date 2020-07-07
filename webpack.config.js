/**
 * @type {import('webpack').Configuration}
 */
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "[name].[chunkhash].js",
  },
  resolve: {
    modules: ["node_modules"],
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|tsx|ts?)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
        common: {
          test: /src\/common/,
          enforce: true,
        },
        "module-1": {
          test: /src\/module-1/,
          enforce: true,
        },
        "module-2": {
          test: /src\/module-2/,
          enforce: true,
        },
      },
    },
    moduleIds: "named",
    chunkIds: "named",
  },
};
