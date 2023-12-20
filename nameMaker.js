// // a=Math.random()
// // console.log(a)
// // first=["Crazy","Amazing","Fire"]
// // second=["Engine","Foods","Garments"]
// // third=["Bros","Limites","Hub"]
// // let a,b,c
// // let d=Math.random(third)
// // if(d<0.3){
// //     console.log(first[0])
// // }
// // Create an array of words
// const words = ["Crazy","Amazing","Fire"];

// // Generate a random index
// const randomIndex = Math.floor(Math.random() * words.length);

// // Get the random word
// const randomWord = words[randomIndex];

// // Print the random word
// console.log(randomWord);




// const words2 = ["Engine","Foods","Garments"];

// // Generate a random index
// const randomIndex2 = Math.floor(Math.random() * words2.length);

// // Get the random word
// const randomWord2 = words2[randomIndex2];

// console.log(randomWord2);
// // Print the random word


// const words3 = ["Bros","Limited","Hub"];

// // Generate a random index
// const randomIndex3 = Math.floor(Math.random() * words3.length);

// // Get the random word
// const randomWord3 = words3[randomIndex3];

// // Print the random word
// console.log(randomWord3);

// console.log(`${randomWord} ${randomWord2} ${randomWord3}`)

const obj1={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
const obj2={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}

const obj3={ 1:"Bros", 2:"Limites",3:"Hub"}
let ran1=Math.floor(Math.random()*3)+1
let ran2=Math.floor(Math.random()*3)+1
let ran3=Math.floor(Math.random()*3)+1
console.log(obj1[ran1]+obj2[ran2]+obj3[ran3])
 console.log(`${obj1[ran1]} ${obj2[ran2]}  ${obj3[ran3]}`)
