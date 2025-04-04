// const person = { name : 'khoi', age : 19}
// const man = person 
// man.age = 18
// console.log(person.age)

// const person = {
//     name : "XYZ"
// }
// function changeName(x){
    
//     x.name = 'abc';
//     x = new Object();
//     x.name = "ggg";
//     console.log(x.name)
// }
// changeName(person);
// console.log(person.name);

function changeName(x){
    
    x.name = 'abc';
    console.log(x.name)
    x = new Object();
    x.name = "ggg";
    console.log(x.name)
}
let person = new Object();
changeName(person);
console.log(person.name);