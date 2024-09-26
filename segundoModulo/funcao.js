function aplicarOperacao(x, operacao) {
    return operacao(x);
}

function dobrar(numero) {
    return numero*2;
}

const resultado = aplicarOperacao(5, dobrar);
console.log(resultado);

//funcao de alta ordem
function criarIncrementador(incremento) {
    return function(numero) {
        return numero+incremento;
    };
}

const incrementoPor2 = criarIncrementador(2);
console.log(incrementoPor2(5));
console.log(criarIncrementador(4)(323572394));

//parametros

function entrada(nome, saudacao) {
    console.log("Olá, "+nome+" "+saudacao);

}

entrada("Rodrigo", "bem vindo");