//Spread operator is generally used to unpack the list of elements in array

let a=[1,2,3,4]
console.log(a);
console.log(...a)
let names=["navya","kumari","surendra"];
let classes=["sixth","nineth","Tenth"];
console.log([...names,...classes]);
console.log([names,classes])
console.log(typeof names)