module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/shopping': {
        target: 'http://localhost:2000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
