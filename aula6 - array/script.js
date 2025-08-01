let colors = ['blue', 'red', 'green']

console.log (colors[1])

let lista = ['blabla', [ 'xx', 'yy']]

console.log(lista[1][1])

// nest exemplo estamos pegando o blabla e mais o 2 item do segundo array o yy

let ingrediente = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];
ingrediente.push('cebola','cor') //incluir item na lista
ingrediente.pop(); // remove o ultimo item
ingrediente.shift(); // remove o primeiro
console.log(ingrediente)
console.log(`Total de ingrediente: ${ingrediente.length}`)

// ordenaçao de arry

let cars = [
    {marca: 'fiat', ano:2022},
    {marca: 'bmw', ano: 2013},
    {marca: 'ferrari', ano:2025}
]

cars.sort((a,b) => a.ano - b.ano);
console.log(cars);

//filtros
let frutas =  ['banana', 'laranja', 'maca', 'pera'];

let bigfrutas = frutas.filter((value) => {
    return value.length > 4
})

frutas.every((value) => {
    return value.length >3
})


console.log(bigfrutas)

