const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  // baseUrl: '/tool/',
  publicPath: "./",
  transpileDependencies: ["vue-echarts", "resize-detector"],
  // configureWebpack: {
  //   devServer: {
  //     proxy: {
  //       '*': {
  //         target: 'http://39.108.93.27/:9091', //设置你调用的接口域名和端口号 别忘了加http
  //         // target: 'http://39.108.210.48:8089',
  //         changeOrigin: true, //这里设置是否跨域
  //         secure: false,
  //         onProxyRes: function (proxyRes, req, res) {
  //           var cookies = proxyRes.headers['Set-Cookie'];
  //           var cookieRegex = /Path=\/cooco-admin/i;
  //           //修改cookie Path
  //           if (cookies) {
  //             var newCookie = cookies.map(function (cookie) {
  //               if (cookieRegex.test(cookie)) {
  //                 return cookie.replace(cookieRegex, 'Path=/');
  //               }
  //               return cookie;
  //             });
  //             //修改cookie path
  //             delete proxyRes.headers['Set-Cookie'];
  //             proxyRes.headers['Set-Cookie'] = newCookie;
  //           }
  //         }
  //       }
  //     }
  //   },

  // },

  //设置图标的
  pwa: {
    iconPath: {
      favicon32: "./LOGO57.png",
      favicon16: "./LOGO57.png",
      appleTouchIcon: "./LOGO57.png",
      maskIcon: "./LOGO57.png",
      msTileImage: "./LOGO57.png"
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      //GZIP压缩
      return {
        plugins: [new CompressionWebpackPlugin({
          test: /\.(js|css)(\?.*)?$/i,//需要压缩的文件正则
          threshold: 10240,//文件大小大于这个值时启用压缩
          deleteOriginalAssets: false//压缩后保留原文件
        })]
      };
    }
  },

  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === "production") {
  //     return {
  //       plugins: [
  //         new CompressionPlugin({
  //           test: /\.js$|\.html$|\.css/,
  //           threshold: 10240,
  //           deleteOriginalAssets: false
  //         })
  //       ]
  //     };
  //   }
  // },
  configureWebpack: {
    devtool: "source-map"
  },
  // devServer: {
  // 	proxy: {
  // 		'/v1': {
  // 			target: "http://39.108.210.48:8089",
  // 			ws: true,
  // 			changeOrigin: true
  // 		}
  // 	}
  // },
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // singleFile: 'src/subpage/main.js'
  }
  //
};
