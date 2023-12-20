// // console.log("Hello World")


// // let elem=document.getElementsByClassName("box")[2].style.backgroundColor="red"
// // console.log(elem)


console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e=>{
    console.log(e)
})
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor='red'
})
// console.log(document.querySelectorAll(".box"))
// let abc=document.getElementsByClassName("box")
// console.log(abc)
// abc[2].style.backgroundColor="red"
// document.getElementById("a").style.backgroundColor="blue";
document.querySelectorAll(".box")[2].style.backgroundColor="red"
console.log(document.getElementsByTagName("div"));