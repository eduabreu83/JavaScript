let person = {
    name: 'Eduardo',
    lastName: 'Abreu',
    Age: 42,
    getFullname() {
        return `${this.name} ${this.lastName}`;
    },
    start() {
        console.log('Deu start na pessoa')
    }
}

person.start();

console.log(person.getFullname());

/////HERANÇA FUNCIONAL

const defaultUser = {
    name: '',
    email: '',
    level:1
}

const user = {
    ...defaultUser,
    name:'Eduardo',
    email: 'eduardoabreu83@gmail.com'
}

const adm1 = {
    ...defaultUser,
    name: 'adim',
    email: 'email#admin',
    level:2
}

console.log(adm1)