const desordem = {
    bagunca: ['Alemanha','Belgica' ,'Camisão','Dourados','Espanha'],
    desordemAlfa: function () {
        this.bagunca.reverse();
        console.log(this.bagunca);
    }
};
desordem.desordemAlfa();