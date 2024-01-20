

const arr = [{
    name: "Sumon",
    age: 25,
    status : "Single"
}, {
    name : "Manu", 
    age: 25,
    single: true,
    friends : ["rahim", "karim", "jabbar", {
        Name : "shafiq",
        location : "jana nai",
        age : "same age"
    }]
}, {
    location : "Badda, Dhaka"
}];
console.log(arr);
console.log(arr[0].name);

console.log(arr[1].friends[3].age);