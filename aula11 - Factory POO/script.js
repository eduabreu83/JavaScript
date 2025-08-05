function createPerson(name, lastname, age) {
    return{
        name, lastname, age
    }
}

let person1 = createPerson('Eduardo', 'abreu', '41')
let person2 = createPerson('mayra', 'abreu', '39')

console.log(person1.name)