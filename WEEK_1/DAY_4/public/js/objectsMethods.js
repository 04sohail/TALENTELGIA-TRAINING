let person = { name: "Alice", age: 25, city: "New York" };

console.log(Object.keys(person)); 
console.log(Object.values(person));

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let merged = Object.assign({}, obj1, obj2);
console.log(merged);

let original = { x: 10, y: 20 };
let copy = { ...original };

copy.x = 50;
console.log(original.x); 
console.log(copy.x);     

let car = { make: "Toyota", model: "Corolla" };

console.log(car.hasOwnProperty("make")); 
console.log(car.hasOwnProperty("year")); 

let student = { id: 101, name: "John", grade: "A" };

Object.entries(student).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
