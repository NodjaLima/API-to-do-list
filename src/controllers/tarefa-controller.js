import TarefaModels from "../models/tarefa-models.js";
import ValidacoesService from "../service/validacoes-service.js";

class TarefasController {
  
  static rotas(app){
    app.get('/tarefas', (req, resp) => {
      const titulo = "Titulo da tarefa";
      const descricao = "Instanciar a class Tarefa para criar uma nova tarefa";
      const status = "Fazendo";
      const data = "20/07/2022";

      const tituloIsValid = ValidacoesService.validaTituloTarefa(titulo);
      const descricaoIsValid = ValidacoesService.validaDescricaoTarefa(descricao);
      const statusIsValid = ValidacoesService.validaStatus(status);

      if ((tituloIsValid) &&
      (descricaoIsValid) &&
      (statusIsValid)) {
        const tarefa = new TarefaModels(titulo, descricao, status, data);
        resp.status(200).json(tarefa)
      } else {
        resp.status(400).send('Erro')
      }
    })

    app.post('/tarefas', (req, resp) => {
      const titulo = "Titulo da tarefa";
      const descricao = "Instanciar a class Tarefa para criar uma nova tarefa";
      const status = "Feito";
      const data = "20/07/2022";

      const tituloIsValid = ValidacoesService.validaTituloTarefa(titulo);
      const descricaoIsValid = ValidacoesService.validaDescricaoTarefa(descricao);
      const statusIsValid = ValidacoesService.validaStatus(status);

      if ((tituloIsValid) &&
      (descricaoIsValid) &&
      (statusIsValid)) {
        const tarefa = new TarefaModels(titulo, descricao, status, data);
        resp.status(200).json(tarefa)
      } else {
        resp.status(400).send('Erro')
      }
      
    });

  }
};

export default TarefasController;