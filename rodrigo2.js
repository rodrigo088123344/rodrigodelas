const remov = {
    numeros: [3, 7, 0, 5, 9],
    remover: function () {
        this.numeros.pop();

        console.log(this.numeros);
    }
};

remov.remover();