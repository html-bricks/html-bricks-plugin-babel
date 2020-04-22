# html-bricks-plugin-babel

Babel support for [html-bricks](https://github.com/html-bricks/html-bricks) using the popular Babel transpiler.

## Requirements

`html-bricks` >= 0.3.

## Installation

Install using npm

`npm install --save-dev html-bricks-plugin-babel`

Then include the plugin in your config

```json
{
  "plugins": [
    "plugin-babel"
  ]
}
```

## Usage

All `.js` files will be compiled using `@babel/preset-env`. If you want to use a different preset, override the transpiler settings using a `.babelrc` file in your project directory. The path to each file is passed to the Babel transpiler, so you can use multiple `.babelrc` files to have different settings for different sections of your project. See [Babel's own documentation on this](https://babeljs.io/docs/en/config-files#file-relative-configuration) for more info.

### Example from Babels website

`src/script.js`

```js
const result = {
  ...obj,
  foo: 'bar'
}
```

`build/script.js`

```js
const result = babelHelpers.extends({}, obj, {
  foo: 'bar'
})
```
