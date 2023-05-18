## NodeJS PubSub Function Template

### NPM initialisation

`npm init -y`

### typescript initialisation

`npm install typescript -D-dev`

`npm install @types/node -D-dev`

### tsconfig generation
`npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true`

### nodemon
`npm install -D-dev ts-node nodemon`

`tsc --watch nodemon --watch ./build/ --exec npm run debug`

`npm run compile -- --watch" "nodemon --watch ./build/ --exec npm run debug`

### Running locally

`npm install -D @google-cloud/functions-framework`

`npm install -D concurrently`

`npm install`

`npm run watch`

### ESLint

`npm install eslint-plugin-shopify -D-dev`

`npm run lint-and-fix`

### Jest

`npm install -D jest typescript`

`npm install -D ts-jest @types/jest`

`npx ts-jest config:init`

`npm test`

### Function

`npm install -D @google-cloud/functions-framework`

`npm install -D @google/events/cloud/storage/v1/StorageObjectData`