import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import buble from "@rollup/plugin-buble";
import replace from "@rollup/plugin-replace";
import cleanup from "rollup-plugin-cleanup";
import sourcemaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: {
      file: pkg.browser,
      format: "umd",
      name: "ColorConverter"
    },
    plugins: [
      resolve({ dedupe: ["parse-css-color"] }),
      typescript({
        declaration: true,
        declarationDir: "types/",
        rootDir: "src/"
      }),

      commonjs(),
      buble(),
      cleanup(),
      replace({ __VERSION__: `v${pkg.version}` }),
      terser()
    ]
  },
  {
    input: "src/index.ts",

    // external: ["pure-color/convert/hsl2rgb", "pure-color/convert/rgb2hex"],
    plugins: [
      typescript(),
      sourcemaps(),
      resolve(),
      commonjs(),
      cleanup(),
      replace({ __VERSION__: `v${pkg.version}` })
    ],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true
      },
      { file: pkg.module, format: "es" }
    ]
  }
];
