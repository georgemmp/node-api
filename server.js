const express = require('express')
const mogoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

app.get("/", (req, res) => {
    res.send('Hello World!')
})

app.listen(3000)