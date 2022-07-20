import UsuarioModels from "../models/usuario-models.js";
import ValidacoesService from "../service/validacoes-service.js";
import DatabaseMetodos from "../utils/db-metodos.js";

class UsuariosController {

  static rotas(app){
    app.get('/usuarios', (req, resp) => {
      const response = DatabaseMetodos.listarUsuarios()
      resp.status(200).json(response)
    })

    app.post('/usuarios', (req, resp) => {
      
      const nomeIsValid = ValidacoesService.validaNome(nome);
      const emailIsValid = ValidacoesService.validaEmail(email);
      const senhaIsValid = ValidacoesService.validaSenha(senha);

      if ((emailIsValid) &&
      (nomeIsValid) &&
      (senhaIsValid)) {
        const usuario = new UsuarioModels(...Object.values(req.body));
        const response = DatabaseMetodos.inserirUsuario(usuario)
        resp.status(200).json(response)
      } else {
        resp.status(400).send('Erro')
      }
    })
  }
}

export default UsuariosController;


