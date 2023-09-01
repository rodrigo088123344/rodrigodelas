const ordem = {
    alfabetica: ['Espanha', 'Belgica', 'Alemanha', 'Dourados', 'Camisão'],
    alfa: function () {
        this.alfabetica.sort();
        console.log(this.alfabetica);
    }
};
ordem.alfa();