// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  extends: "@sveltejs/snowpack-config",
  mount: {
    "src/components": "/_components",
    lib: "/_lib",
  },
  alias: {
    $components: "./src/components",
    $lib: "./lib",
  },
  external: ["node-fetch"],
  plugins: ["@snowpack/plugin-dotenv"],
};
