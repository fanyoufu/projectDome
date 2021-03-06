const vendors = [ //  需要提前打包的资源
  'xlsx',
  'lodash',
  'vue/dist/vue.esm.js',
  'vue-router',
  'vuex',
  'element-ui',
  'echarts',
  'iview',
  'moment',
]
const webpack = require('webpack')
const path = require('path')
module.exports = {
  output: {
    path: path.join(__dirname, './static/js/lib'), // 打包后文件输出的位置
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  entry: {
    'lib': vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
}
