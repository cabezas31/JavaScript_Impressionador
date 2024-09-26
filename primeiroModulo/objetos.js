// OBJETOS

let livro = {
    titulo: "Harry Potter",
    dataLancamento: "12/04/2020",
    autor: "Rodrigo Cabezas",
    preco: 5000.00,
}
console.log(livro);
livro["idioma"] = "portugues";
console.log(livro);
delete livro["idioma"];
console.log(livro);