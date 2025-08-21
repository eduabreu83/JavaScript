// este operador recebe todos os parametros enviados 

function adicionar(...numeros){
    console.log(numeros)
}

adicionar(5,4,5,6,7)

//funcao par adicionar nomes nas lista com rest

function adicionarNomes(nomes, ...novosnomes){
    let conjunto = [
        ...nomes,
        ...novosnomes
    ];

    return conjunto;
}

let nomes = ['Eduardo']

let outros = adicionarNomes('Mayra', 'davi', 'livia')

console.log(outros)
