import express from "express";

const app = express()
const porta = 3000


app.listen(porta, () => {
  console.log(`Servidor funcionando na porta ${porta}`)
})