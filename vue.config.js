const { version } = require('./package.json');

module.exports = {
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 8090,
    hot: true,
    disableHostCheck: true
  },
  chainWebpack: (config) => {
    config
      .plugin('define')
      .tap((args) => {
        args[0]['process.env'] = Object.assign(args[0]['process.env'], {
          VERSION: JSON.stringify(version)
        });
        return args;
      });
  }
};
