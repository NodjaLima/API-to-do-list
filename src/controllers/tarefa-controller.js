class TarefasController {
  
  static rotas(app){
    app.get('/tarefas', (res, resp) => {
    resp.send(`Rota ativada com GET e recurso Tarefas: valores de Tarefas devem ser retornados`)
    })
  };

};

export default TarefasController;