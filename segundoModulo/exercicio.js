//exercicio 1

function calcularMedia(nota1, nota2, nota3) {
    let x = (nota1+nota2+nota3)/3
    console.log("A média do aluno é: "+x.toFixed(1))
    return function(pf) {
        media_final = (x+pf)/2;
        console.log("A média final do aluno é: "+media_final.toFixed(1));
    }
}
calcularMedia(8, 5, 7);

//exercicio 2: incrementação da função anônima para calcular a média final
calcularMedia(5, 6, 7)(8);

//exercicio 3:
function conversao(Celsius) {
    F = (9/5) * (Celsius)+32
    console.log("a temperatura correspondente em Farenheit é de: "+F+"°F");
}
conversao(35);

//exercicio 4:
function incrementarImposto(preco) {
    let imposto = preco*(108.875/100);
    console.log("O valor a ser pago é: "+imposto);
}
incrementarImposto(100);