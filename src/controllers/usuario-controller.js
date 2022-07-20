class UsuariosController {

  static rotas(app){
    app.get('/usuarios', (req, resp) => {
      resp.send(`Rastreamento da aplicação sendo feito com nodemon`);
      
    })

    app.post('/usuarios', (req, resp) => {
      resp.send(`Rota POST de usuario ativada: usuário adicionado ao Banco de Dados`);
      
    })
  }
}

export default UsuariosController;


