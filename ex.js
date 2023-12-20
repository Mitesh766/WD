// // let a=1;
// // for (let i = 0; i<100; i++) {
// //     console.log(a+i);
// // }
// console.log(3/6)
 const obj={
    name:"Mitesh",
    age:19,
    gender:"Female"
 }
  for( key in obj){
     element=obj[key];
    console.log(key,element)
  }


  for(const c of "Mitesh"){
    console.log(c)
  }
  for(i=0;i<3;i++){
    console.log(obj.name)
  }