/*function clicou(){
    fetch ('https://jsonplaceholder.typicode.com/posts')
        .then( (response) => {
            return response.json();
        })
        .then((json) => {
            alert(`Titulo do resposta: ${json[0].title}`)
            document.querySelector('#area').innerHTML += json[0].title; 
        
        })

        //alert('OPA CLICOU') 
        .catch(()=> {
            alert('Algo deu ruim')
        })

        .finally(() => { //funçao para bloquear o form até ao final da requisição
            alert('acabou tudo')
        })
    alert("CLICOU")
}

function inserir(){
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method:'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body:JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId:2
            })
        }
    )
    .then((response)=>{
        return response.json();
    })
    .then((json) => {
        console.log(json)
        document.querySelector('#area').innerHTML += json.body
    })
}

document.querySelector('#inserir').addEventListener('click',inserir)
document.querySelector('#botao').addEventListener('click',clicou)
*/
// Outro modelo com função e mais comun de utilização

async function clicou() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    alert(`titulo do primiero post ${json[0].tittle}`)

    alert('CLICOU')
}


async function inserir() {
    let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method:'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body:JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId:2
            })
        })
    let json = await response.json()
    console.log(json)
    document.querySelector('#area').innerHTML += json.body
}

document.querySelector('#inserir').addEventListener('click',inserir)
document.querySelector('#botao').addEventListener('click',clicou)