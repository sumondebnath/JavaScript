

const obj = {
    id : 333,
    name : "sumon",
    age : 25, 
    status : {
        first : "not available",
        second : {
            property : "not mention",
        },
    },
};

const {name, status:{first, second:{property}}} = obj;

console.log(name);

console.log(first);

console.log(property);