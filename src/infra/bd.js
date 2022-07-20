const Database = {
  Usuarios : [
    {
      nome: "Mariana Lima",
      email: "marianalima@meuemail.com",
      senha: "senhadamariana"
    },
    {
      nome : "Miguel Gall",
      email : "miguelgall@meuemail.com",
      senha : "senhadomiguel"
    },
    {
      nome : "William Boladão",
      email : "will_sempaciencia@meuemail.com",
      senha : "senhadowilliam"
    }
  ],
  Tarefas : [ {
    titulo : "Brincar com o cachorro", 
    descricao: "Levar para correr na praia no final da tarde", 
    status : "Fazer", 
    dataDeCriacao : "20/01/2022"
  },
  {
    titulo : "Regar as plantas", 
    descricao: "Com a mangueira que saí do chuveiro da garagem, regar as plantas", 
    status : "Feito", 
    dataDeCriacao : "20/01/2022"
  },
  {
    titulo : "Descongelar feijão para o jantar", 
    descricao: "Tirar o pote de fake sorvete do congelador antes de 16h da tarde", 
    status : "Feito", 
    dataDeCriacao : "19/01/2022"
  }]
};

export default Database


  