
const Person = {
    firstName : "Sumon",
    lastName : "Debnath",
    age : 25,

    get : function(){
        return this.firstName + " " + this.lastName;
    },
}


console.log(Person.get());