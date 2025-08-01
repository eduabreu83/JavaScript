for(let n = 0; n <10; n++) {
    console.log('frase ' + n)
}
/*
for (let n = 1; n <= 10; n++) {
  console.log("\n");
  console.log(`Tabuada de ${n}`);
  for (let i = 0; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
*/
let cores = [
    {nome:'preto', qt: 2},
    {nome:'branco', qt: 5},
    {nome:'azul', qt: 10 },
    {nome:'vermelho', qt: 20}

]

for(let y = 0; y < cores.length; y++) {
    console.log(cores[y])
}
console.log('\n')

for(let i in cores) {
    cores[i].nome = cores[i].nome.toUpperCase();
}
console.log('\n')

for (let cor of cores) {
    console.log(cor)
}


//loop while

let nu = 0;

while (nu <= 10 ) {
    console.log(`o numero da vez é ${nu}`)
    nu++;
}

let fruts = [ "maca", "uva", "laranja", "banana"]

console.log(fruts.join('carabola'));


