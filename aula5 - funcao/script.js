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
// 99% das variaveis estrão fora da funçao 
let count = 0; // variavel de escopo globlal  // quando temos dentro é de escopo local

function add() {
    count++;
}

add();
add();

console.log(count);


function addSquare(a,b) {
    //dica do professor, realizar uma funçao dentro de outra a funça pode ser por arrow function
    const square = (x) => {
    return x * x;
}

    let sqra = square(a);
    let sqrb = square(b);
    return sqra + sqrb;
}

console.log(addSquare(2, 3))