const express = require('express')
const data = require('../data')
const route = express.Router()



route.get("/blog",data)

module.exports = route
