import TarefaModels from "../models/tarefa-models.js";

class TarefasController {
  
  static rotas(app){
    app.get('/tarefas', (req, resp) => {
      const tarefa = new TarefaModels("Titulo da tarefa","Instanciar a class Tarefa para criar uma nova tarefa", "Feito", "20/07/2022");
      resp.status(200).json(tarefa)

    })

    app.post('/tarefas', (req, resp) => {

      const tarefa = new TarefaModels("Titulo da tarefa","Instanciar a class Tarefa para criar uma nova tarefa", "Feito", "20/07/2022");
      resp.status(200).json(tarefa)
      
    });

  }
};

export default TarefasController;