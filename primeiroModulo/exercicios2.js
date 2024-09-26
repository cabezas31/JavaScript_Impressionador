//exercicio 1
//let precoProduto = 200;
//let desconto = 40;
//let imposto = 12;
//let precoFinal = precoProduto - desconto + imposto;
//console.log("Preço final do produto: "+precoFinal);

//exercicio 2
//let precoProduto2 = 100;
//let lucro = precoProduto2 + 30;
//console.log("O preco final com lucro é: "+lucro);

//exercicio 3
//let orcamento = 250;
//let custo = 300;
//let desconto2 = 50;
//let precoDesconto = custo - desconto2;
//console.log("O preço com desconto do produto é: "+precoDesconto);
//console.log(Boolean(precoDesconto<=orcamento));

//exercicio 4
//let estoque = "20";
//let minimo = 30;
//console.log(Boolean(estoque>=minimo));
//if(Boolean(estoque>=minimo) == true) {
//  console.log("A quantidade do estoque está dentro da margem mínima.");
//  } else {
    //  console.log("A quantidade do estoque não está dentro da margem mínima.");
//  }

//exercicio 5
let disponivel = true;
let quantidade = 10;
let minimo = 15;
console.log("O produto está disponível e a quantidade é o suficiente: "+Boolean(disponivel && quantidade >= minimo));
console.log("O produto esta indisponivel: "+!Boolean(disponivel));