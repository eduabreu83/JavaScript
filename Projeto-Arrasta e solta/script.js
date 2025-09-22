document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragEnd', dragEnd);
})

document.querySelectorAll('.area').forEach(area =>{
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
})

//funcoes

function dragStart(e){
    e.currentTarget.classlist.add('dragging');
}

function dragEnd(e){
    e.currentTarget.classlist.remove('dragging')
}

function dragOver(e){
    if(e.currentTarget.querySelector('.item')=== null){
        e.preventDefault();
        e.currentTarget.classlist.add('hover')
}

function dragLeave(e){
    e.currentTarget.classlist.remove('hover')

}

function drop(e){
    e.currentTarget.classlist.remove('hover')
    
    if(e.currentTarget.querySelector('.item')=== null){
        let dragItem = document.querySelector('item.dragging')
        e.currentTarget.appendChild(dragItem)
    }
}