import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
//import typescript from "@rollup/plugin-typescript";
import ts from "@wessberg/rollup-plugin-ts";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    { file: packageJson.module, format: "esm", sourcemap: true },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    ts(),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
  ],
  external: ["react", "react-dom", "uuidjs"],
};
