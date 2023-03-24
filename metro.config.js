const path = require("path");

module.exports = {
  resolver: {
    extraNodeModules: {
      components: path.resolve(__dirname, "src/components"),
    },
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
};
