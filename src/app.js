import express from "express";
import * as dotenv from "dotenv";
import UsuariosController from "./controllers/usuario-controller.js";
import TarefasController from "./controllers/tarefa-controller.js";

dotenv.config();
const porta = process.env.PORT || 3000;

const app = express()

app.listen(porta, () => {
  console.log(`Servidor funcionando na porta ${porta}`)
})

app.use(express.json())

UsuariosController.rotas(app)
TarefasController.rotas(app)