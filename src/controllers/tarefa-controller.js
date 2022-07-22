import TarefaModels from "../models/tarefa-models.js";
import ValidacoesService from "../service/validacoes-service.js";
import DatabaseMetodos from "../utils/db-metodos.js";

class TarefasController {
  
  static rotas(app){
    app.get('/tarefas', (req, resp) => {
      const response = DatabaseMetodos.listarTarefas()
      resp.status(200).json(response)
     })

    app.get('/tarefa/:status', (req, resp) => {
      const response = DatabaseMetodos.listarTarefasPorIndex(req.params.status)
      resp.status(200).json(response)
  })

    app.post('/tarefas', (req, resp) => {
   
      const tituloIsValid = ValidacoesService.validaTituloTarefa(req.body.titulo);
      const descricaoIsValid = ValidacoesService.validaDescricaoTarefa(req.body.descricao);
      const statusIsValid = ValidacoesService.validaStatus(req.body.status);

      if ((tituloIsValid) &&
      (descricaoIsValid) &&
      (statusIsValid)) {
        const tarefa = new TarefaModels(...Object.values(req.body));
        const response = DatabaseMetodos.inserirTarefa(tarefa)
        resp.status(200).json(response)
      } else {
        resp.status(400).send('Erro')
      }
      
    });

  }
};

export default TarefasController;