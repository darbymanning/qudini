module.exports = function (api) {
  api.cache(true);

  return {
    exclude: ["node_modules/@babel/**"],
    plugins: [
      "@babel/plugin-syntax-dynamic-import",
      [
        "@babel/plugin-transform-runtime",
        {
          useESModules: true,
        },
      ],
    ],
    presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  };
};
