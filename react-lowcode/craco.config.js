const path = require('path')
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    configure (webpackConfig) {
      if (webpackConfig.mode === 'production') {
        if (webpackConfig.optimization === null) {
          // 抽离公共代码
          webpackConfig.optimization = {}
        }
      }
      //   webpackConfig.optimization.splitChunks = {
      //     chunks: 'all',
      //     cacheGroups: {
      //       antd: {
      //         name: 'antd-chunk',
      //         test: /antd/,
      //         priority: 100
      //       },
      //       reactDom: {
      //         name: 'reactDom-chunk',
      //         test: /react-dom/,
      //         priority: 99
      //       },
      //       vendors: {
      //         name: 'vendors-chunk',
      //         test: /node_modules/,
      //         priority: 98
      //       }
      //     }
      //   }
      return webpackConfig
    },
    devServer: {
      port: 8000,
      proxy: {
        '/api': 'http://localhost:3001'
      }
    }
  }
}