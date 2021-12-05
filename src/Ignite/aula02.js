const express = require('express')
const { v4: uuidv4 } = require("uuid") // Biblioteca uuid

const app = express()

app.use(express.json())

const customers = [] //Banco de dados FAKE

/**Cadastrando uma conta com CPF existente 
 * cpf = string
 * name = string
 * id = uuid // Gera um numero do cadastro do user // para usar esse uuid precisamos instalar uma biblioteca(yarn add uuid)
 * statement = []
*/

// ## Middleware
function verifyIfExistsAccountCPF(req, res, next){
    const { cpf } = req.headers

    const customer = customers.find((customer) => customer.cpf === cpf)

    if(!customer){ // Validação da conta do cliente
        return res.status(400).json({ error: "Customer not found"})
    }

    req.customer = customer;

    return next();
}

function getBalance(statement){
    const balance = statement.reduce((acc, operation)=>{//reduce ela pega as inf de determinado valor q vamos passar p ela e ela transforma essas inf e valores em um valor  somente
        if(operation.type === 'credit'){
            return acc+ operation.amount;
        }else{
            return acc - operation.amount;
        }
    }, 0) 
}

app.post("/account", (req, res) =>{

    const {cpf, name} = req.body

    const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf) // verifica se o cpf é valido
    //o cpf fica salvo no customers
    if(customerAlreadyExists){
        return res.status(400).json({error: "Customer already exists!"}) // Se o cpf não exista vai retornar esse error
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    })

    return res.status(201).send()
})

app.get("/statement", verifyIfExistsAccountCPF, (req, res) =>{
    const {customer} = req;
    return res.json(customer.statement);
})

app.post("/deposit", verifyIfExistsAccountCPF, (req, res) =>{
    const { description, amount } = req.body
    const { customer } = req;
    const statmentOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "credit"
    }
    customer.statement.push(statmentOperation)
    return res.status(201).send()
})

app.post("/withdraw", verifyIfExistsAccountCPF , (req, res) =>{
    const { amount } = req.body
    const { customer } = req;
    const balance = getBalance(customer.statement)
    if(balance < amount){
        return res.status.status(400).json({error: "Insuficient funds!"})
    }
    const statementOperation = {
        amount,
        created_at: new Date(),
        type: "debit"
    }
    customer.statement.push(statementOperation);
    return res.status(201).send()
})

app.get("/statement/date", verifyIfExistsAccountCPF, (req, res) =>{
    const { customer } = req
    const { date } = req.query
    const dateFormat = new Date(date + " 00:00");
    const statement = customer.statement.filter(
        (statement) =>
            statement.created_at.toDateString() ===
            new Date(dateFormat).toDateString()
        );
    return res.json(statement);
})

app.put("/account", verifyIfExistsAccountCPF, (req, res) =>{
    const { name } = req.body;
    const { customer } = req
    customer.name = name; //altera o nome do user
    return res.status(201).send();
})

app.get("/account", verifyIfExistsAccountCPF, (req, res) =>{
    const { customer } = req;
    return res.json(customer)
})

app.delete("/account", verifyIfExistsAccountCPF, (req, res) =>{
    const { customer } = req;
    //splice
    customers.splice(customer, 1);
    return res.status(200).json(customers)
});

app.get("/balance", verifyIfExistsAccountCPF,(req, res)=>{
    const { customer } = req
    const balance = getBalance(customer.statement)
    return res.json(balance) 
})
app.listen(3333)