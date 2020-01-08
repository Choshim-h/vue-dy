
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    publicPath: './', // 生产环境基本路径
    outputDir: 'dist', // 生产环境构建文件目录
    assetsDir: 'static', // 静态资源放置目录
    indexPath: 'index.html', // 打包后入口文件
    filenameHashing: true, // 开启文件hash
    lintOnSave: true, // 是否开启eslint
    productionSourceMap: false, // 是否开启map
    devServer: {
        port: 9527, // 端口
    },
    configureWebpack: config => {
        return {
            resolve: {
                alias: {
                    'base': resolve('src/base'),
                    'components': resolve('src/components'),
                    'api': resolve('src/api'),
                    'common': resolve('src/common'),
                    'assets': resolve('src/assets'),
                }
            }
        }
    }
}