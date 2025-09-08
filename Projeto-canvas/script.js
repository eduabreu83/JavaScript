//initial data

let currentColor = 'black'

let screen = document.querySelector('#tela');

let ctx = screen.getContext('2d')

//events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent)
})

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseUp', mouseUpEvent);



//functions
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color')
    currentColor = color

    document.querySelector('.color.active').classList.remove('active')

    e.target.classList.add('active')
}

function mouseDownEvent(){

}

function mouseMoveEvent(){

}

function mouseUpEvent(){
    
}