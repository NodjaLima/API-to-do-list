import UsuarioModels from "../models/usuario-models";

class TarefasController {
  
  static rotas(app){
    app.get('/tarefas', (req, resp) => {
    resp.send(`Rota ativada com GET e recurso Tarefas: valores de Tarefas devem ser retornados`)
    })

    app.post('/tarefas', (req, resp) => {
      resp.send(`“Rota POST de tarefa ativada: tarefa adicionada ao Banco de Dados`)
    });

  }
};

export default TarefasController;