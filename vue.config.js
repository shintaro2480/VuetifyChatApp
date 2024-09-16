const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_OPTIONS_API__': 'true',  // Options API を有効化
        '__VUE_PROD_DEVTOOLS__': 'false',  // Vue Devtoolsを無効化
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': 'false',  // デフォルトのfalseに設定
      })
    ]
  }
});