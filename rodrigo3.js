const array = {
    numerosUm: [3, 7, 1, 5, 9],
    numerosDois: [2, 8, 6, 4,],
    metodo: function () {
        this.numerosUm.push(...this.numerosDois);
        this.numerosUm.sort();
        this.numerosDois.sort();
        console.log(this.numerosUm);
    }
};
array.metodo();