const express = require('express')
const mogoose = require('mongoose')
const requireDir = require('require-dir')
const routes = require('./src/routes')

const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

requireDir('./src/models')

app.use('/api', routes)

app.listen(3000)