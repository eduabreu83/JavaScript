//JSON.parse  serve para transformar uma string em um formato que possa ser acessar como um objeto

let pessoa = '{"nome": "Eduardo", "idade": 90}'

pessoa = JSON.parse(pessoa)

//JSON.STRINGIFY --- CONVERT DE JSON PARA STRING

JSON.stringify({nome:'Eduardo', idade : 90})

// codigo sincrono executa linha a linha

let nome = 'Eduardo';
let sobrenome = 'Abreu';
let completo = nome + sobrenome;


// codigo assincrono

let nome1 = 'Eduardo';
let sobrenome2 = 'Abreu';
let temp = maquina.pegartemp(); // essa linha é assincrona
let completo2 = nome + sobrenome;


//CALLBACK

//nesta funçao o alerta só aparece depois de 2 segundos

function alertar(){
    alert("opa, tudo bem ?")
}
setTimeout(alertar,2000)


//PROMISSES - QUANDO ESTAMOS ESPERANDO O RESULTADO "PROMESSA" POR UM FUNÇAO

function pegartemp2(){
    return new Promise(function(resolve, reject){
        console.log('pegando temperatura')

        setTimeout(function() {
            resolve('40 na sombra')
        },2000)
    })
}

//Usando a Promiss

let temp2 = pegartemp2();

temp2.then(function(resultado){ // quando der certo usando um callback
    console.log('Temperatura' + resultado)
})

temp2.catch(function(error){ //quando der problema usando um callback
    console.log("algo deu de errado")
});


//FETCH 1

