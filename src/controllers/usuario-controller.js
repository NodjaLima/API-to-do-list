class UsuariosController {

  static rotas(app){
    app.get('/usuarios', (rep, resp) => {
      resp.send(`Rota ativada com GET e recurso Usuários: valores de Usuários devem ser retornados`);
      console.log(`funcionando na porta ${porta}`)
    })
  }
}

export default UsuariosController;


