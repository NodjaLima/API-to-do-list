import { Database } from "../infra/bd.js";

class DatabaseMetodos {
  static listarTodoOBanco(){
    return Database
}

static listarUsuarios(){
  return Database.Usuarios
}

static inserirUsuario(usuario){
  Database.Usuarios = [...Database.Usuarios, usuario]
  return Database.Usuarios
}

static inserirTarefa(tarefa){
  Database.Tarefas = [...Database.Tarefas, tarefa]
  return Database.Tarefas
}

static listarTarefas() {
  return Database.Tarefas
}

static listarTarefasPorStatus(status) {
  return Database.Tarefas.filter((tarefa) => tarefa.status == status)
  }

static deletarUsuarioPorNome(nome_deletado) {
  const usuarioDelet = Database.Usuarios.find(usuario => usuario.nome === nome_deletado)
  const novoDb = Database.Usuarios.filter(usuario => usuario !== usuarioDelet)
  Database.Usuarios = novoDb
  return Database.Usuarios
}
}


export default DatabaseMetodos;
