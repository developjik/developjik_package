import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
