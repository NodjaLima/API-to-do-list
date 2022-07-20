import UsuarioModels from "../models/usuario-models.js";
import ValidacoesService from "../service/validacoes-service.js";

class UsuariosController {

  static rotas(app){
    app.get('/usuarios', (req, resp) => {
      const nome = "Nome do usuário";
      const email = "emaildousuario@gmail.com";
      const senha = "senhasecreta";
      
      const nomeIsValid = ValidacoesService.validaNome(nome);
      const emailIsValid = ValidacoesService.validaEmail(email);
      const senhaIsValid = ValidacoesService.validaSenha(senha);

      if ((emailIsValid) &&
      (nomeIsValid) &&
      (senhaIsValid)) {
        const usuario = new UsuarioModels(nome, email, senha);
         resp.status(200).json({...usuario, funfou : "Sim"})
       } else {
         resp.status(400).send('Erro')
       }
 
    })

    app.post('/usuarios', (req, resp) => {
      const nome = "Nome do usuário";
      const email = "emaildousuario@gmail.com";
      const senha = "senhasecreta";
      
      const nomeIsValid = ValidacoesService.validaNome(nome);
      const emailIsValid = ValidacoesService.validaEmail(email);
      const senhaIsValid = ValidacoesService.validaSenha(senha);

      if ((emailIsValid) &&
      (nomeIsValid) &&
      (senhaIsValid)) {
        const usuario = new UsuarioModels(nome, email, senha);
         resp.status(200).json({...usuario, funfou : "Sim"})
       } else {
         resp.status(400).send('Erro')
       }
    })
  }
}

export default UsuariosController;


