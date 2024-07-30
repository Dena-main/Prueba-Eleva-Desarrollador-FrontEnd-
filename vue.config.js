const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mi-app/' 
    : '/',

  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,

  devServer: {
    port: 8080,  
    open: true,  
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',  
        changeOrigin: true,  
        ws: true,  
      }
    },
    client: {
      overlay: {
        warnings: true,
        errors: true
      }
    }
  },

  productionSourceMap: true,
  transpileDependencies: false,
  lintOnSave: true,

  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      css: {},
      postcss: {}
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'));
  },

  pwa: {},
  pluginOptions: {}
});
