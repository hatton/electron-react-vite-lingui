export default {
  locales: ["en", "es"],
  catalogs: [
    {
      path: "locales/{locale}/messages",
      include: ["<rootDir>/src/**/*.{ts,tsx}"],
      exclude: ["/node_modules/", "/dist/", "/out/"],
    },
  ],
  compileNamespace: "ts",
  extractBabelOptions: {
    presets: ["@babel/preset-typescript"],
  },
};
