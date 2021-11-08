const express = require('express')

const app = express()

app.get("/", (request, response) => {
    return response.json({message: 'Hello, world! Ignite :P'})
})

app.listen(8080)