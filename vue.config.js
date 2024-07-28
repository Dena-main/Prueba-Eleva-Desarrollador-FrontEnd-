const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mi-app/' // Cambia esto según la ruta donde se despliega tu aplicación
    : '/',

  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,

  devServer: {
    port: 8080,  // Puerto en el que se ejecutará el servidor de desarrollo
    open: true,  // Abrir el navegador automáticamente al iniciar el servidor
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',  // URL del servidor al que se deben redirigir las solicitudes
        changeOrigin: true,  // Cambiar el origen de la solicitud a la URL del objetivo
        ws: true,  // Habilitar el soporte de WebSocket
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
