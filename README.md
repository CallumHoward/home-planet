# Home Planet

- `yarn start` Starts typescript typechecking and esbuild in watch mode, and serves web page at localhost:5000.
- `yarn build` Builds production bundle for browser, outputs bundle to dist/bundle.js with source map.
- `yarn clean` Clean up assets produced by esbuild.

All code bundling and transpilation is handled by esbuild. Its configuration is kept inside `esbuild.config.mjs`. Follow [esbuild docs](https://esbuild.github.io/getting-started/) to see all supported options.
