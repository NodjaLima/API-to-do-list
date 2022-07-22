import UsuarioModels from "../models/usuario-models.js";
import ValidacoesService from "../service/validacoes-service.js";
import DatabaseMetodos from "../utils/db-metodos.js";
import { Database } from "../infra/bd.js"

class UsuariosController {

  static rotas(app){
    app.get('/usuarios', (req, resp) => {
      const response = DatabaseMetodos.listarUsuarios()
      resp.status(200).json(response)
    })

    app.post('/usuarios', (req, resp) => {
      
      const nomeIsValid = ValidacoesService.validaNome(req.body.nome);
      const emailIsValid = ValidacoesService.validaEmail(req.body.email);
      const senhaIsValid = ValidacoesService.validaSenha(req.body.senha);

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

    app.delete('/usuarios/:nome', (req, resp)=> {
      const usuario = DatabaseMetodos.deletarUsuarioPorNome(req.params.nome)
      resp.status(200).json(usuario)
      });

  }
}

export default UsuariosController;


