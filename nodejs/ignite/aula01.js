const express = require("express")

const app = express()

app.use(express.json())

/*
    * GET = Buscar uma informação dentro do servidor
    * POST = Inserir uma informação no servidor
    * PUT = Alterar uma informação no servidor
    * PATCH = alterar uma informação específico
    * DELETE = Deletar uma informação no servidor
 */
/**
 #Tipos de parametros:

 1 - Route Params => Indentificar um recurso editar/deletar/buscar
    app.put("/courses/:id", (req, res) =>{
    const {id} = req.params
    console.log(id)
    return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})
 

 2 - Query Params => Paginação /Filtro
    app.get("/courses", (req, res) => {
    const query = req.query
    console.log(query)
    return res.json(["Curso 1", "Curso 2", "Curso 3"])
})

 3 - Body Params => Os objetos inserção/alteração
    app.post("/courses", (req, res) =>{
    const body = req.body
    console.log(body)
    return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
});

:>  1 - Route Params => Indentificar um recurso editar/deletar/buscar
:>  2 - Query Params => Paginação /Filtro
:>  3 - Body Params => Os objetos inserção/alteração

 */

app.get("/courses", (req, res) => {
    const query = req.query
    console.log(query)
    return res.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (req, res) =>{
    const body = req.body
    console.log(body)
    return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
});

app.put("/courses/:id", (req, res) =>{
    const {id} = req.params
    console.log(id)
    return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (req, res) =>{
    return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (req, res) =>{
    return res.json(["Curso 6", "Curso 2", "Curso 4"])
})

app.listen(8080);
