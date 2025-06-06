
    // Here For In use for object itterations

const myObj = {
    "first name" : "Sumon",
    "last name" : "Debnath",
    age : 25,
    city : "Dhaka",
    country : "Bangladesh"
};

for(property in myObj){
    console.log(property);          // Printing keys
    console.log(myObj[property]);   // Printing Values
}


    // when we for in used an array it's return arrays indexs.

let elements = [10, 20, 30, 40, 50, 60, 70];

for(element in elements){
    console.log(element);
}