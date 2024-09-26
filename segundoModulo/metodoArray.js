const lista = [
    { nome: "Daniel", nota: 5 },
    { nome: "Rodrigo", nota: 15},
    { nome: "João", nota: 18},
]

//filter - método responsável por gerar um novo array de resultado de um filtro estabelecido pelo programador
const alunosArpovados = lista.filter(function (aluno){
    return aluno.nota >=12;
})

console.log(alunosArpovados);

//find - método responsável por achar um objeto de acordo com o filtro estabelecido pelo programador

//map
const listaNomesALunosAprovados = alunosArpovados.map(function (aluno){
    return aluno.nome
})
console.log(listaNomesALunosAprovados)