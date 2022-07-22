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
  return Database.Tarefas.filter((tarefa) => tarefa.status.toLowerCase() == status.toLowerCase())
  }

static deletarUsuarioPorNome(nome_deletado) {
  const usuarioDelet = Database.Usuarios.find(usuario => usuario.nome === nome_deletado)
  const novoDb = Database.Usuarios.filter(usuario => usuario !== usuarioDelet)
  Database.Usuarios = novoDb
  return {nome: nome_deletado, success: "usuario excluido com sucesso!"}
}

static deletarTarefaPorStatus(status) {
  const tarefaDelet = Database.Tarefas.find(tarefa => tarefa.status.toLowerCase() === status.toLowerCase())

  if(!tarefaDelet == []) {
    const novoDb = Database.Tarefas.filter(tarefa => tarefa !== tarefaDelet)
    Database.Tarefas = novoDb
    return {status: status, success: `tarefa com status ${status} excluido com sucesso!`}
  } else {
    return {status: status, Error: `tarefa com status ${status} não encontrada.`}
  }
  
  
}
}


export default DatabaseMetodos;
