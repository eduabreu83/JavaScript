const char = createKnight ('Eduardo')
const monster = createLittleMosnter()

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);