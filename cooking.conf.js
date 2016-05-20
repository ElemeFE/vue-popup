var cooking = require('cooking');

cooking.set({
  entry: {
    index: './src/index.js'
  },
  dist: './lib',
  use: 'vue',
  publicPath: '/lib/',
  template: false,

  devServer: false,
  format: 'umd',
  moduleName: 'VuePopup',
  extractCSS: 'popup.css',
  sourceMap: true,

  extends: ['vue', 'lint']
});

cooking.add('externals.vue', 'vue');

module.exports = cooking.resolve();