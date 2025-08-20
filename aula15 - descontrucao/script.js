let pessoa = {
    nome: 'Eduardo',
    sobrenome:'Abreu',
    idade: 42,
    social:{
        insta:{
            url:'eduabreu83',
            seguifores: '1000'
        },
        X: 'Cenoralost'
    },
    nomeCompleto: function() {
        return`${this.nome} ${this.sobrenome}`
    }
}

// para nao pegar cada dado do objeto criando variavei separadas podemos descontrui-lo:

let {nome, sobrenome,social:{insta:{url:insta}}} = pessoa
console.log(nome, sobrenome, insta);


function pegarNomeCompleto({nome, sobrenome}) {
    return `${nome} ${sobrenome}`
}

console.log(pegarNomeCompleto(pessoa))


// Descontruir Arrays

let info = ['eduardo Abreu', 'Eduardo', 'Abreu', '@eduabreu'];

let [nomeCompleto1, , , social1] = info;
// para nao precisar pegar todos é só colocar a virgula 
console.log(nomeCompleto1,social1)

//descontruçao de funçao / objeto
function criar() {
    return [1,2,3]
}

let [a,b,c] = criar()

console.log(a,b,c)  

