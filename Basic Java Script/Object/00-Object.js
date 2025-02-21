

const Car = {
    Name : "Fiat",
    Model : 500,
    Weight : "850KG",
    Color : "White", 

    start : function(){
        console.log("car can start");
    }, 
    drive : function(){
        console.log("car can drive.");
    }
}

console.log(Car.Name);

Car.drive();
Car.start();


console.log(Car["Name"]);