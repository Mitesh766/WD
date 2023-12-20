// const arr2=[1,"Hello","My","name"]
let arr=[1,94,5,6,7,0]
// const ar=["is","Mitesh"]
// console.log(arr.toString())
// // arr.join("==")
// // arr.pop();
// // console.log(arr.pop())
// // arr.push("Hello")
// // console.log(arr)
// // arr.shift()
// // console.log(arr.shift())
// // console.log(arr)
// // arr.unshift(7)
// // console.log(arr.unshift(9))
// // console.log(arr)
// // delete arr[2]
// // console.log(arr)
// // delete arr[3]
// // console.log(arr)
// // console.log(arr.length)
// // arr.concat(arr3)
// // console.log(arr)
// arr.reverse()
// console.log(arr)
// // arr.splice(1,3,8)
// // console.log(arr)
// // console.log(arr.length)
// // arr.slice(2)
// // console.log(arr.slice(2,1))
// // ar.forEach((index,value,a) => {
// //     console.log(index,value,a)   
// // });

// let brr=arr.map((e,v,p)=>{
//     console.log(e**2)
//     return e**2
// }
// )
// console.log(brr)
// // const gts=(e)=>{
// //     if(e>7){
// //         return true
// //     }
// //     return false
// // }
// // arr.filter(gts)
// // console.log(arr.filter(gts))
// let crr=arr.map(value=>{
//     console.log(value**2)
//     return value*value
// })
// console.log(crr.toString())

// function lts(e){
//     if(e<7){
//         return true
//     }
//     else 
//     return false  
// }
// // const lts=(e)=>{
// //     if(e<7){
// //         return true
// //     }
// //     else 
// //     return false
// // }
// let zrr=arr.filter(lts)
// console.log(zrr)
// console.log(arr)
//  function sum(a,b){
//     return a+b
//  }
//  console.log(arr.reduce(sum))
// let wrr= Array.from("Hello")
// console.log(wrr)
// arr.reverse()
// console.log(arr)
// arr.forEach((value,index,arr)=>{
// console.log(value,index,arr);
// })

// brr=arr.map(e=>{
//     return e*e;
// })
// console.log(brr)
// const sumgt7=(a,b)=>{
//     return a+b
   
// }
// crr=brr.reduce(sumgt7)
// console.log(crr)
// console.log(Array.from("Hello World"))



const arr2=[1,2,3,4]
const brr222=arr2.map(e=>{
    return e*e*e;
})
console.log(brr222)
const sum=(a,b)=>{
    return a*b;
}
const brr3=arr2.reduce(sum)
console.log(brr3)


const lt3=(e=>{
   if(e<3)
   return e;

})

const drr=arr2.filter(lt3)
console.log(drr)


const object={
    name:"Mitesh",
    age:20,
    marks:100
}

for (let  key in object) {
    
        const element = object[key];
        console.log(key,element)
}


for(const c of "Hello"){
    console.log(c);
}

arr.forEach(e=>{
    console.log(e)
})
delete arr[2]
arr.sort()
arr.splice(0,5,1,2,3,4,5)
arr.reverse()
console.log(arr.join( "+"))
arr.forEach((value,index,array)=>{
 console.log(index,value,array)
})
console.log(Array.from("Heelo"))