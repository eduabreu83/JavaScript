let numeros = [1,2,3,4]

let outros = [...numeros, 5,6,7]

console.log(outros)


// spred em um objeto que será muito utilizado dentro de funçoes com a utilização de objetos

let info = {
    nome: 'eduardo',
    sobrenome: 'abreu',
    idade: 99
}

let novaInfo = {
    ...info,
    cidade: 'Jundiai',
    estado: 'sao paulo'
}

function adicionarinfo(info){
    let novasInfo = {
        ...info,
        status: 0,
        token: 'uahsuahauha'
    }
    return
}

console.log(adicionarinfo({nome:'eduardo', sobrenome:'abreu'}))