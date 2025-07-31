let idade = 46;
let idade2 = "41"
;
if (idade >= 18 && idade < 46) {
    console.log("vc esta velho");
} else {
    console.log("vc ainda não é velho")
}


if (idade >= 18 || idade <= 46) {
    console.log("vc esta velho");
} else {
    console.log("vc ainda não é velho")
}

if (idade2 === 47) {
    console.log("vc ainda náo e velho");
} else {
    console.log("vc é velho")
}


let idade3 = 18

if(idade3 < 18){
    console.log("vc é uma criança")
} else if (idade3 >= 18 && idade <60) {
    console.log("vc é adulto")
} else if(idade3 >=60){
    console.log("vc é velho")
}

//condicional ternario

let isMember = true;

let shippeing = isMember ? 2 : 10;


console.log("frete é " + shippeing)

//condiçao de switch

let profissao = "fiscal";

switch(profissao) {
    case 'fical':
        console.log('sua camisa vai ser VERDE');
        break;
    case 'bombeiro':
        console.log('sua camisa vai ser AMARELO');
        break
    case 'policial':
        console.log('sua camisa vai ser AZUL');
        break
    default:
        console.log('sua camisa vai ser PRETA');
        break
}