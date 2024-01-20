

const obj = {
    firstName: "Sumon",
    lastName: "Debnath",
    age : 25,
    friends : ["rahim", "karim", "shafiq", "jabbar"],
    single : true
};

console.log(obj.firstName);
console.log(obj.single);


    // object destructuring.

const obje = {
    Name : "Sumon Debnath",
    age : 25,
    location : "Badda",
    gender : "Male", 
    single : true,
    status : {
        sex:"male",
        likes:"female"
    }
};

const {age, Name, gender, status} = obje;       // note object ar vitor je properties ache oi gula diye e destructuring kora jabe.

console.log(age);
console.log(Name);
console.log(status.sex);

        // nested object.