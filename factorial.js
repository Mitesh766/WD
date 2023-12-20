let arr=[];
// console.log(arr)
let n=5
for (let i = 1; i <=n; i++) {
    arr.push(i)
    
}
 let prod=1
for (let i = 1; i <=n; i++) {
    prod*=arr[i]  
}
console.log(prod)
// function product(a,b){
// return a*b;
// }
// console.log(arr.reduce(product))
