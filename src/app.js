import express from "express";

const app = express()
const porta = 3000

app.get('/usuarios', (rep, resp) => {
  resp.send(`Rota ativada com GET e recurso Usuários: valores de Usuários devem ser retornados`);
  console.log(`funcionando na porta ${porta}`)
})

app.listen(porta, () => {
  console.log(`Servidor funcionando na porta ${porta}`)
})