import Database from "../infra/bd.js";

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

static listarTarefasPorIndex(status) {
  return Database.Tarefas.filter((item) => item.status == status)
  }
  
}



export default DatabaseMetodos;
