//metodo
let casa = {
    cor: "branco",
    sala: 15,
    cozinha: 10,
    banheiro: 8,
    quarto: 20,
    calcularTamanho: function () {
        const tamanhoTotal = this.sala + this.cozinha+ this.banheiro+ this.quarto;
        console.log(`O tamanho total da sala é de ${tamanhoTotal}m²`)
        return tamanhoTotal;
    },
}
casa.calcularTamanho()