function gravidade () {
    let gravi = 10
    console.log(`A gravidade do planeta é de ${gravi}`);
}

gravidade();

// funcoes com parametros
function somar(n1, n2){
    let resultado = n1 + n2
    console.log('Resultado ' + resultado)
}
somar(4,4)

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`)
}

nomeCompleto("Eduardo", "Abreu")

function nomeCompleto2(nome, sobrenome) {
    return`${nome} ${sobrenome}`
}
console.log(nomeCompleto2("livia", "Abreu"));

// ENTRADA -> PROCESSAMENTO -> SAIDA

function maiorIdade(idade) {
    if (idade >=18){
        return true;
    } else {
        return false;
    }
}

let idade = 20;
let verificacao = maiorIdade(idade);

if (verificacao) {
    console.log('é maior de idade');
} else{
    console.log('é menor de idade')
}

//ARROW FUNCTION

const somar1 = (x, y) => {
  return x + y;
};

console.log(somar1(10, 5));

//VARIAVEIS DENTRO E FORA DE FUNCOES

