import express from "express";
import * as dotenv from "dotenv";
import UsuariosController from "./controllers/usuario-controller.js";
import TarefasController from "./controllers/tarefa-controller.js";


dotenv.config();
const porta = process.env.PORT || 3000;

const app = express()
app.use(express.json())

app.listen(porta, () => {
  console.log(`Servidor funcionando na porta ${porta}`)
})

UsuariosController.rotas(app)
TarefasController.rotas(app)