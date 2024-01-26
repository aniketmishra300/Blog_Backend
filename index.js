const express = require('express')
const app = express()
const cors = require("cors")
const route  = require('./Route/Route')

app.use(cors({
    origin:'*'
}))

app.use('/api',route)

app.listen(5050,()=>{
    console.log("server is running fine")
})