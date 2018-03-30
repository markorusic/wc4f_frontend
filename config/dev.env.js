'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

let api_base_url = "http://localhost:8088/"

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE_URL: `"${api_base_url}"`
})
