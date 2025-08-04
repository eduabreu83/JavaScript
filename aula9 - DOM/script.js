function clicou () {
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