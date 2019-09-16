module.exports = {
  presets: ["@vue/app"],
  env: {
    development: {
      sourceMaps: true,
      retainLines: true,
      plugins: ["dynamic-import-node"]
    }
  }
};
