const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
        response.json({
            nome: "Jéssica Rosário",
            imagem: 'https://photos.google.com/share/AF1QipNHJOEZn0nlba2EXiPk8mU2yXs_KYdMX2Qou3P8aNfxHaUV0k4fFGEfUYSuXIc4yA/photo/AF1QipMQoyN96K3nkziZxq2zlrzxmgQxxiivnERE9e10?key=ajNheXRqWDl1WThlZUFoN0t0ekoxNWxhdkljaVJB',
            minibio: "Ser humano perdido e torcendo para alguma coisa dar certo"
        })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)

