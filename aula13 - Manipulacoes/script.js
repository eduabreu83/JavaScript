let nome = 'Eduardo de Abreu'

let resultado = ''

if (nome.indexOf('de')> -1) {
    resultado = 'achou'
}else {
    resultado = 'nao acho'
}

console.log(resultado)

console.log(nome.slice(0, 8))

console.log(nome.replace('Abreu', 'Motos'))

console.log(nome.toLowerCase())

console.log(nome.toUpperCase())

console.log(nome.concat(' ', 'da Silva'))

console.log(nome.length)

console.log(nome.trim().length)

console.log(nome.charAt(4)) //indica o caractaer em alguma posição do texto

console.log(nome[2])

console.log(nome.split(' '))


let n = 20.09898

console.log(n.toString())
console.log(n.toFixed(2))

// funçao parseInt convert uma string em um numero
// funçao parseFloat convert uma string em um numero float

let lista = ['ovo', 'farinha', 'corante', 'massa']

console.log(lista)
console.log(lista.join('-'))
console.log(lista.pop())
console.log(lista.shift())
console.log(lista)
console.log(lista.push('novo item'))
console.log(lista)
console.log(lista[3] = 'mayra') // nao recomendado utilizar essa maneira para incluir algo no array
console.log(lista)
console.log(lista.splice(3,1))
console.log(lista)

let lista2 = ['forno', 'fogão']

console.log(lista.concat(lista2))

console.log(lista.sort())
console.log(lista.reverse())

let lista3 = [45, 4,9, 16, 25]
console.log(lista3.map(function(item){
    return item *2
}))

console.log(lista3.filter(function(item){
    if (item <20){
        return item
    }else{
        return false
    }
}))

console.log(lista3.every(function(item){
    if (item < 20) {
        return item
    }else{
        false
    }
}))

console.log(lista3.some(function(item){
    return (item > 3) ? true :false // condiçao ternaria
}))

console.log(lista3.find(function(item){
    return( item === 4) ? true: false
}))

console.log(lista3.findIndex(function(item){
    return (item == 4) ? true : false
}))

let listaPessoa = [
    {
     id:1, nome:'eduardo', sobrenome:'Abreu'   
    },
    {
     id:2, nome:'Mayra', sobrenome:'abreu'  
    }
]

let pessoa = listaPessoa.find(function(item2){
aula13 - String, array, numeros    return (item2.sobrenome == 'abreu') ? true : false
})

console.log(pessoa)

let d = new Date(); //o JS considera janeiro como 0

console.log(d.toDateString())
console.log(d.toUTCString())
console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDay())// retorna o dia da semana em numero
console.log(d.getDate())
console.log(d.getHours())


