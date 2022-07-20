import express from "express";
import UsuariosController from "./controllers/usuario-controller.js";
import TarefasController from "./controllers/tarefa-controller.js";


const app = express()
const porta = 3000


app.listen(porta, () => {
  console.log(`Servidor funcionando na porta ${porta}`)
})


UsuariosController.rotas(app)
TarefasController.rotas(app)