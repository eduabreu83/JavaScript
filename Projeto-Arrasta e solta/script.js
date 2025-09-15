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