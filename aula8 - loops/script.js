for(let n = 0; n <10; n++) {
    console.log('frase ' + n)
}

for (let n = 1; n <= 10; n++) {
  console.log("\n");
  console.log(`Tabuada de ${n}`);
  for (let i = 0; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

let cores = ['preto', 'branco', 'azul', 'vermelho']

for(let y = 0; y < cores.length; y++) {
    console.log(cores[y])
}
console.log('\n')

for(let i in cores) {
    
    console.log(cores[i])
}
console.log('\n')

for (let cor of cores) {
    console.log(cor)
}