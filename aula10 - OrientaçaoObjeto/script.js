class Person{
    age = 0;
    steps = 0;

    constructor(name) {
        this.name = name;
    }

    takeAstep() {
        this.steps++;
    }

    setAge(newAge) {
        if (typeof newAge =='number'){
            this.age = newAge;
        } else{
            console.log('Idade não aceita')
        }
    }


}

let p1 = new Person("joao");
let p2 = new Person("maria");
let p3 = new Person("jose");

p1.setAge(20)
p1.takeAstep();
console.log(`Passo de ${p1.name}: ${p1.steps} com ${p1.age} anos`)

class Person2{
    _age = 24;
    steps = 0;

    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    get age (){
        return this._age
    }

    set age(x) {
        if (typeof x == 'number'){
            this._age = x;
        }
        
    }
    
}

let p4 = new Person2("joao", 'silva');
let p5 = new Person2("maria", 'abreu');
let p6 = new Person2("jose", 'bocato');

p4.age = 25
console.log(`${p5.fullName} tem ${p5.age} anos`)

////////////////////////////////////////////////////////////////////

//HERANÇA
class Person3 {
    age = 0;

    constructor(name){
        this.name = name
    }

    sayHi(){
        console.log(`${this.name} diz OI`)
    }
}

class Student extends Person3 {

    constructor(name,id) {
        super(name);
        this.id = id
    }

    sayHello(){
        super.sayHi();
    }
}

let p7 = new Student('Eduardo', 1);
p7.age = 42

console.log(`${p7.name} tem ${p7.age} anos e matricula #${p7.id} `)
p7.sayHello();


/////////////////////////

////Static
class Person4 {
    age = 0;
    static hands = 2

    constructor(name){
        this.name = name
    }

    sayOi(){
        console.log(`Oi, eu sou ${this.name} e tenho ${Person4.hands} maos`)
    }
}

let p8 = new Person4 ('Mayra')

p8.sayOi()

////Factory

class Person5 {
    age = 0;

    constructor(name,){
        this.name = name
    }
}

function createPerson(name,age){
    let p = new Person5(name);
    p.age = age;
    return p;
}

let p9 = createPerson('Livia', 8)

console.log(`${p9.name} tem ${p9.age} anos `)
