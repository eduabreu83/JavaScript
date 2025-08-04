/*function clicou () {
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    let newUl = document.createElement('ul')

    for (let i = 0; i < 5; i++){
        let newLi = document.createElement('li');
        newLi.innerHTML = "item add " + i;
        newUl.append(newLi)
    }
    ul.after(newUl)
}

function clicou(){
    const input = document.querySelector("input")

    if (input.hasAttribute('placeholder')){ 
        console.log('tem placeholder');
    } else {
        console.log('não tem placeholder')
    }
}



function clicou() {
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao')

    if (input.getAttribute('type')=== 'text'){
        input.setAttribute('type', 'password');
        botao.innerHTML = 'mostrar senha'
    }  else{
        input.setAttribute('type', 'text');
        botao.innerHTML = 'Ocultar senha'
    }
}

function clicou() {
    const li = document.querySelector('li');

    li.style.backgroundColor = '#00F';
    li.style.fontSize = '20px'
}



function clicou(){
    const button = document.querySelector('button');
    
    if (button.classList.contains('azul')){
        button.classList.remove('azul');
        button.classList.add('verde') ;
    } else{
        button.classList.add('verde');
        button.classList.remove('verde');
    }
}

*/
const input = document.querySelector('input');
const lista = document.querySelector('ul')

function handleKeyup (e) {
    if(e.key === 'Enter') {
       const newLi = document.createElement('li');
       newLi.innerHTML = input.value;
       lista.appendChild(newLi);

       input.value = ''
    }

}

input.addEventListener('keyup', handleKeyup);