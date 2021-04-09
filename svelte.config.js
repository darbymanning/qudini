const sveltePreprocess = require("svelte-preprocess");

const preprocessOptions = {
  sourceMap: true,
  defaults: {
    style: "scss",
  },
  postcss: {
    plugins: [require("autoprefixer")()],
  },
};

module.exports = {
  preprocess: sveltePreprocess(preprocessOptions),
  preprocessOptions,
};
