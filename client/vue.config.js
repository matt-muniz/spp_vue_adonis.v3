module.exports = {
  devServer: {
    proxy: {
      "/customer": {
        target: "http://localhost:3333"
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
