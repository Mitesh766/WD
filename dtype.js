var a=5;
var b="Hello";
// var is globally scoped
console.log(a+6);
console.log(typeof a,typeof b);


const a1=6;
// a1=a1+1 not allowed

let a2=7;
a2=a2+8;

{
let a2=1;

console.log(a2);

}

console.log(a2);

// let is block scope