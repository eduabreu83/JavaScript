let lista = ['eduardo', 'mayra', 'davi']

console.log(Object.keys(lista))


console.log(Object.values(lista))


console.log(Object.entries(lista))

// string, padStart, padend

let  telefone = '54';

console.log(  telefone.padEnd(9,'*'))
console.log(  telefone.padStart(9,'*'))

//uso pratico, demostração de uso pratico para a funçao

let cartao = '1234567890987765'

let lastDigits = cartao.slice(-4)

let cartaoMacarado = lastDigits.padStart(16,'*')

console.log(`Este é o seu cartao? ${cartaoMacarado}`)