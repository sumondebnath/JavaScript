

const myObj = {
    name : "unknown",
    age : "unknown",
    city : "unknown",
    state : "unknown",
    country : "unknown",
};
    // myObj all keys return as a list.
let keys = Object.keys(myObj);
console.log(keys);

    // myObj all values return as a list.
let values = Object.values(myObj);
console.log(values);

    // its return a list of list, thats inside has a key value list.
let key_val = Object.entries(myObj);
console.log(key_val);