/*
    This Example is tagged template, here we create a function and call insice the clg before the template string.
    because of when clg execute every ${Interpolated value} modifires called and add before the ${Interpolated value} Mr. 
*/

function modifiers(strings, ...values){
    const modifier = strings.reduce((prev, curr)=>{
        return prev + curr + (values.length ? "Mr. " + values.shift() : "");
    }, "");     // "" :  initial value 0 or null 
    return modifier;
}


let player1 = "Sakib";
let player2 = "Tamim";


console.log(modifiers`We have ${player1} and ${player2} in out cricket Team!`);