

class Person{
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
}


const person1 = new Person("Sumon Debnath", "Male", 26);

person1.age = 25;

console.log(person1);