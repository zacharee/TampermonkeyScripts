const { merge } = require("webpack-merge");
const path = require("path");
const {
  UserScriptMetaDataPlugin,
} = require("userscript-metadata-webpack-plugin");
const MinimizerPlugin = require("minimizer-webpack-plugin");

const {createMetadata} = require("./metadata.cjs");
const webpackConfig = require("./webpack.config.base.cjs");

module.exports = function(env) {
  const metadata = createMetadata(env.PACKAGE);

  return merge(webpackConfig, {
    mode: "production",
    output: {
      filename: `${metadata.name}.user.js`,
    },
    optimization: {
      // if you need minimize, you need to config minimizer to keep all comments
      // to keep userscript meta.
      minimize: false,
    },
    cache: {
      type: "filesystem",
      name: "prod",
    },
    plugins: [
      new UserScriptMetaDataPlugin({
        metadata,
      }),
      new MinimizerPlugin({
        extractComments: true,
      }),
    ],
  });
}
