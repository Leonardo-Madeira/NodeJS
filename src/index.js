const { request } = require("express")
const express = require("express")

const app = express()

/*
    * GET = Buscar uma informação dentro do servidor
    * POST = Inserir uma informação no servidor
    * PUT = Alterar uma informação no servidor
    * PATCH = alterar uma informação específico
    * DELETE = Deletar uma informação no servidor
 */

/**
 Tipos de parametros:

 1 - Route Params => Indentificar um recurso editar/deletar/buscar {
    const {id} = request.params
    console.log(id)
 }

 2 - Query Params => Paginação /Filtro

 */

app.get("/courses", (req, res) => {
    const query = request.query
    console.log(query)
    return res.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (req, res) =>{
    return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
});

app.put("/courses/:id", (req, res) =>{
    const {id} = request.params
    console.log(id)
    return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])

})

app.patch("/courses/:id", (req, res) =>{
    return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (req, res) =>{
    return res.json(["Curso 6", "Curso 2", "Curso 4"])
})

app.listen(8080)