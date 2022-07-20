import UsuarioModels from "../models/usuario-models.js";

class UsuariosController {

  static rotas(app){
    app.get('/usuarios', (req, resp) => {
      const usuario = new UsuarioModels("Nome do usuário","emaildousuario@gmail.com", "senhasecreta");
      resp.status(200).json(usuario)

    })

    app.post('/usuarios', (req, resp) => {
      
      const usuario = new UsuarioModels("Nome do usuário","emaildousuario@gmail.com", "senhasecreta");
      resp.status(200).json(usuario)
          
    })
  }
}

export default UsuariosController;


