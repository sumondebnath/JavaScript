
    // Before Rest Operator Visualization

function myFunc(){
    console.log(arguments);
}

myFunc(10, 20, 30, 40);



    // After Using Rest Opreator

function restOperator(...params){
    console.log(params);
}

restOperator(11, 22, 33, 44, 55, 66);