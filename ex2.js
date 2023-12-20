let a= 'mitesh';
console.log(a+=6)
console.log(a)
console.log(typeof a);
const stud={
    name:"Mitesh" ,
    "Phone number":7665086956,
    marks:100 ,
}
console.log(stud)
stud.name=1
stud.mar=2;
console.log(stud)
let Dictionary={
    Democracy: "By the people and for the people",
    Secularism:"Have the right to follow any religion",
    Sovereignty:"Have the right to speak whatever we want provided it should not hurt anyone",
    Liberty:"We have the right to make our own choices",
    Independence:"It means to be free",
}
console.log(Dictionary)
let b=stud.mar>2?"True":false;
console.log(b);
let c=8;
switch (stud.mar) {
    case 2:console.log("Its six")
        
        break;

    default:
        console.log("iTS not 6")
        break;
}
function sum() {
    console.log("Hello");
}
sum();
let student={
    "marks1": "Hello",
    marks2: 100,

}
for(const key in student){
    const element=student[key];
    console.log(key,element);
}
for(let i =0;i<2; i+=1){
    console.log(student[i]);
}
let d= student[marks1];
console,log(d)