let pessoa = {
    nome: 'Eduardo',
    sobrenome:'Abreu',
    idade: 42,
    social:{
        insta: 'educenora',
        X: 'Cenoralost'
    },
    nomeCompleto: function() {
        return`${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto())