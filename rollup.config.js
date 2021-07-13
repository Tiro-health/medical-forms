import peerDepsExternal from "rollup-plugin-peer-deps-external";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import ts from "@wessberg/rollup-plugin-ts";
import postcss from 'rollup-plugin-postcss';

const packageJson = require("./package.json");

export default {
  input: { "index": "src/index.ts", "Base": "src/Base/index.ts", "Questionnaires": "src/Questionnaires/index.ts" },
  output: [
    {
      dir: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    { dir: packageJson.module, format: "esm", sourcemap: true },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    ts(),
    postcss({extensions: [".css"]})
 ],
  external: ["react", "react-dom", "uuidjs"],
};
