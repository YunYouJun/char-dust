const pkg = require('./package.json')
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/' + pkg.name + '/'
    : '/',
  css: {
    extract: true
  }
}