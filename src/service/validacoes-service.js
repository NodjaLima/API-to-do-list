export default class ValidacoesService {
  static validaNome(nome) {
    if(nome.length >= 3 && nome !== "") return true;
    else return false; 
  }

  static validaEmail(email) {
    let usuario = email.substr(0, email.indexOf("@"));
    let dominio = email.substr(email.indexOf("@")+ 1, email.length);

    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
          return true;
        }else {
          return false;
        }
      }

  static validaSenha(senha) {
    if (senha.length >= 8) return true;
    else return false; 
  }

  static validaTituloTarefa(titulo) {
    if (titulo != '') return true;
    else return false;
  }

  static validaDescricaoTarefa(descricao) {
    if (descricao != '') return true;
    else return false;
  }

  static validaStatus(status) {
    const statusValidos = ["Fazer", "Fazendo", "Feito"]
    return statusValidos.includes(status)
  }
  
}