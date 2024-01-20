        // one line arrow function.
let fun = (a, b) => a+b;

console.log(fun(10, 20));

const func = () => 20*2;
console.log(func);


        // multi-line arrow function.

let any = () =>{
    let a = 100;
    let b = "the value is : "
    let c = b+a;
    console.log(c);
    return "its working...";
}

// any();
console.log(any());

    // if we had a parameter we can skip parentheses.
let val = a => {
    console.log(a);
}

val("500");