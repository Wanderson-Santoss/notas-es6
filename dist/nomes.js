"use strict";

// Array de objetos com nome e nota dos alunos
var alunos = [{
  nome: 'João',
  nota: 5
}, {
  nome: 'Maria',
  nota: 7
}, {
  nome: 'Pedro',
  nota: 6
}, {
  nome: 'Ana',
  nota: 8
}, {
  nome: 'Lucas',
  nota: 4
}];

// Função para retornar alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Testando a função
var alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);