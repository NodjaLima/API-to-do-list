class UsuariosController {

  static rotas(app){
    app.get('/usuarios', (rep, resp) => {
      resp.send(`Rastreamento da aplicação sendo feito com nodemon`);
      console.log(`funcionando na porta ${porta}`)
    })
  }
}

export default UsuariosController;


