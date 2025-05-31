const path = require('path');

module.exports = {
  entry: './src/index.js', // точка входа
  output: {
    filename: 'main.js', // выходной файл
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development' // или 'production'
};
