let a=prompt("Enter first number ")
let b=prompt("Enter second number")
let c=prompt("Enter operator")
const random=Math.random
const obj={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"*"
}
if(random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}