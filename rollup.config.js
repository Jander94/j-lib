import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import dts from "vite-plugin-dts";

export default {
  input: "src/index.ts",
  output: [
    { file: "dist/index.cjs.js", format: "cjs", exports: "named" },
    { file: "dist/index.esm.js", format: "esm" },
  ],
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
    dts({
      insertTypesEntry: true,
      outputDir: "dist",
      clean: true,
      sourceMap: false,
    }),
  ],
};
