const webpack = require('webpack');

/**
 * Webpack config used for the client and server for our extension.
 *
 * Primarily to ignore vscode from dependencies and leave everything else
 * at default, but leaves room for customization in the future.
 */

module.exports = (/**@type WebpackConfig*/ config, context) => {
  /**@type WebpackConfig*/
  const newConfig = {
    ...config,
    externals: {
      vscode: 'commonjs vscode', // ignored because it doesn't exist
    // ignoreWarnings: [/^warning/i],
    // stats: 'none',
    // devtool: 'gitCLI',
    // plugins: [
    //   new webpack.SourceMapDevToolPlugin(
    //   }),
    // ],
    // stats: {
    //   hash: true,
    //   timings: true,
    //   cached: true,
    //   cachedAssets: true,
    //   modules: true,
    //   warnings: true,
    //   errors: true,
    //   colors: true,
    //   chunks: true,
    //   assets: true,
    //   chunkOrigins: true,
    //   chunkModules: true,
    //   children: true,
    //   reasons: true,
    // }
  };
  // console.log(JSON.stringify(config,, 2));
  return newConfig;
};
