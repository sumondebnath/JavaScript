

var Person = {
    Name : "Sumon Debnath",
    age : 25,
    Weight : 65,
    Gender : "Male",

    Educations : {
        versity_name: "BUBT",
        Dept_name: "EEE"
    }
};
    // print object
console.log(Person);
    // print object keys
console.log(Object.keys(Person));
    // print object values
console.log(Object.values(Person));
    // print key value pair
console.log(Object.entries(Person));

console.log(Person.Name);
console.log(Person.Weight);


// print object inside object.

console.log(Person.Educations);
console.log(Person.Educations.Dept_name);