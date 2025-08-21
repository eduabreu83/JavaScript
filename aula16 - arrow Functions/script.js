//funçao normal
function somar(){
    return x + y
}

let somar  = function (x,y){
    return x + y
}

// funçao arrow
let somar = (x,y) => {
    return x+y
}
// outras formar de montar sem precisar do return com expressão direta
let somar = (x,y) => x + y

// com 1 paremetro sem o return

let letrasNome = nome => nome.length;

console.log(somar(10,5))


