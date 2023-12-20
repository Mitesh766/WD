let obj={
    name:"Mitesh",
    marks:100,
    age:19
}
for (const key in obj) {
    
        const element = obj[key];
        console.log(key,element);
        
    }

for (const key in obj) {
    // if (Object.hasOwnProperty.call(object, key))
     {
    //  const element = object[key];
     console.log(key);
    }
}

for(const c of "Mitesh"){
    console.log(c);
}