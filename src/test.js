const express = require('express')

const app = express()

app.get("/", (req, res) => {
    return res.send('Hello, world! FUCK')
})

app.listen(3333)