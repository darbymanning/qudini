/* Rollup plugins */
import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";

/* Packages */
import config from "sapper/config/rollup.js";
import "dotenv/config";
import path from "path";
import pkg from "./package.json";
import sveltePreprocess from "svelte-preprocess";
const preprocessOptions = require("./svelte.config").preprocessOptions;

/* Assignments */
const mode = process.env.NODE_ENV;
const production = !process.env.ROLLUP_WATCH;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === "MISSING_EXPORT" && /'preload'/.test(warning.message)) ||
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

const customResolver = resolve({
  extensions: [".js", ".mjs", ".html", ".svelte", ".scss", ".json"],
});

const aliasconfig = {
  customResolver,
  entries: [
    {
      find: "$components",
      replacement: path.join(__dirname, "./src/components"),
    },
    {
      find: "$lib",
      replacement: path.join(__dirname, "./src/lib"),
    },
  ],
};

const preprocess = sveltePreprocess({
  ...preprocessOptions,
  sourceMap: !production,
});

const replaceconfig = {
  "process.browser": true,
  "process.env.NODE_ENV": JSON.stringify(mode),
  "pkg.version": pkg.version,
};

/* Config */
export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    onwarn,
    plugins: [
      alias(aliasconfig),
      commonjs(),
      customResolver,
      replace(replaceconfig),
      resolve({ browser: true, dedupe: ["svelte"] }),
      svelte({
        compilerOptions: {
          dev,
          hydratable: true,
        },
        preprocess,
      }),
      url({
        sourceDir: path.resolve(__dirname, "src/node_modules/images"),
        publicPath: "/client/",
      }),
      legacy &&
        babel({
          exclude: ["node_modules/@babel/**"],
          extensions: [".js", ".mjs", ".html", ".svelte"],
          babelHelpers: "runtime",
        }),

      !dev && terser({ module: true, numWorkers: 1 }),
    ],
    preserveEntrySignatures: false,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    onwarn,
    plugins: [
      alias(aliasconfig),
      commonjs(),
      customResolver,
      replace({ ...replaceconfig, "process.browser": false }),
      resolve({ dedupe: ["svelte"] }),
      json(),
      svelte({
        compilerOptions: {
          dev,
          generate: "ssr",
          hydratable: true,
        },
        emitCss: false,
        preprocess,
      }),
      url({
        sourceDir: path.resolve(__dirname, "src/node_modules/images"),
        publicPath: "/client/",
        emitFiles: false, // already emitted by client build
      }),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules
    ),
    preserveEntrySignatures: "strict",
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    onwarn,
    plugins: [
      alias(aliasconfig),
      commonjs(),
      customResolver,
      replace(replaceconfig),
      resolve(),
      !dev && terser({ numWorkers: 1 }),
    ],
    preserveEntrySignatures: false,
  },
};
