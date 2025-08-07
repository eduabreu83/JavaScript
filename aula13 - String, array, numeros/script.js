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


