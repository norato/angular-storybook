const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /.(pug|jade)$/,
        loader: "apply-loader!pug-loader?self",
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
