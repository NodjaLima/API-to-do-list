import { Database } from '../infra/bd.js'

class DatabaseMetodos {
  static listarTodoOBanco(){
    return Database
}

static listarTodosUsuarios(){
    return Database.Usuarios
}

static inserirUsuario(usuario){
    Database.Usuarios = [...Database.Usuarios, usuario]
    return Database.Usuarios
}
}

export default DatabaseMetodos;
