
    // Way - 01

import { add, Remove } from "./utils.js";

(async function (){
    const {add, Remove} = await import("./utils.js");
    add();
    Remove();
})();




    // Way - 02

import("./utils.js").then(({add, Remove}) =>{
    add();
    Remove();
});