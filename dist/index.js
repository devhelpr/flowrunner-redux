
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./flowrunner-redux.cjs.production.min.js')
} else {
  module.exports = require('./flowrunner-redux.cjs.development.js')
}
