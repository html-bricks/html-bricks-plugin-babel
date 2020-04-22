const path = require('path')
const transform = require('@babel/core').transform
const jsReg = /\.js$/

exports.postBuild = function (files, config) {
  return new Promise((resolve, reject) => {
    const next = files.map(file => {
      if (file.src.match(jsReg)) {
        const result = transform(file.content.toString(), {
          filename: file.dest,
          configFile: path.resolve(__dirname, 'babel.config.js')
        })
        return Object.assign({}, file, {
          content: result.code
        })
      } else {
        return file
      }
    })

    resolve(next)
  })
}
