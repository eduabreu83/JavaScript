let personagem = {
    nome: 'Eduardo',
    idade: '41',
    altura: '1,68',
    peso: '82',

    caracteristicas: { //podemos criar um objeto dentro de outro 
        cabelo: 'liso',
        cor_olhos:['Castanho Claro', 'azul'],
        tamanhoCamisa: 'M',
        forca: 10
    }
}

console.log(`${personagem.nome} tem ${personagem.idade} anos que possui cabelo ${personagem.caracteristicas.cabelo} e com a cor do olho direito ${personagem.caracteristicas.cor_olhos[1]}`)

let pessoa = {
    nome:'mayra',
    idade: 39,
    carros: [ 
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'GM', cor: 'prata' }
    ]
}

console.log(pessoa.carros[1].modelo);


/// funçoes dentro de um objeto
let pessoa1 = {
    nome: 'Davi',
    sobreNome: 'Abreu',
    idade: 90,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobreNome}`; // o this quase não é utilizado
    }
}

console.log(pessoa1.nomeCompleto()); 