// ARRAY METHODS

// JavaScript Array length
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(`fruits length = ${fruits.length}`);

// JavaScript Array toString()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(`Str Of fruits = ${fruits.toString()}`);

// JavaScript Array at()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(`Third Element Of The Fruit = ${fruits.at(2)}`);
// console.log(`Third Element Of The Fruit = ${fruits[2]}`);

// JavaScript Array join()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join('-->'));

// JavaScript Array pop()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let poppedItem = fruits.pop()
// console.log(`Popped item = ${poppedItem}`);

// JavaScript Array push()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi")
// console.log("Fruits array after push = ", fruits);

// JavaScript Array shift()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift()
// console.log("Fruits Array After Shifting = ", fruits);

// JavaScript Array unshift()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Banana")
// console.log("Fruits Array After UnShifting = ", fruits);

// Changing Elements
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "Kiwi"
// console.log("Fruits Array After Changing = ", fruits);

// JavaScript Array delete()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0]
// console.log("Fruits Array After Deleting = ", fruits);

// JavaScript Array concat()
// let myGirls = ["Cecilie", "Lone"];
// let myBoys = ["Emil", "Tobias", "Linus"];
// let conCatinatedArr = myGirls.concat(myBoys)
// console.log("Concatinated Arr = ", conCatinatedArr);
// let arr1 = ["Cecilie", "Lone"];
// let arr2 = ["Emil", "Tobias", "Linus"];
// let arr3 = ["Robin", "Morgan"];
// conCatinatedArr = arr1.concat(arr2, arr3)
// console.log("Concatinated Arr = ", conCatinatedArr);

// Array copyWithin()
// let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
// let copiedArr = fruits.copyWithin(3, 0, 3)
// console.log(copiedArr);

// JavaScript Array flat()
// let myArr = [[1,2],[3,4],[5,6]];
// let flatteneArr = myArr.flat()
// console.log(flatteneArr);

// JavaScript Array flatMap()
// let myArr = [1, 2, 3, 4, 5]
// let flatMapArr = myArr.flatMap(x => [x + 10])
// console.log(flatMapArr);

// JavaScript Array splice()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let rest = fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits, rest);

// JavaScript Array toSpliced()
// let months = ["Jan", "Feb", "Mar", "Apr"];
// let newMonths = months.toSpliced(0, 1)
// console.log(newMonths);

// JavaScript Array slice()
// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let citrus = fruits.slice(1);
// console.log(citrus);

// ARRRAY SEARCHING

// JavaScript Array indexOf()
// let fruits = ["Apple", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple", 3)
// console.log(index);

// JavaScript Array lastIndexOf()
// let fruits = ["Apple", "Orange", "Apple", "Mango", "Apple"];
// let lastIndexOf = fruits.lastIndexOf("Apple")
// console.log(lastIndexOf);

// JavaScript Array includes()
// let fruits = ["Apple", "Orange", "Apple", "Mango", "Apple", NaN];
// console.log(fruits.includes(NaN));

// JavaScript Array find()
// const myFunction = (value, index, array)=>{
//     return value==25
// }
// let numbers = [4, 9, 16, 25, 29];
// let newArr = numbers.find(myFunction)
// console.log(newArr);

// Sorting an Array
// let numbers = [1, 5, 5, 3, 5, 7, 3, 5, 7]
// numbers.sort()
// console.log(numbers);

// Reversing an Array
// let numbers = [1, 5, 5, 3, 5, 7, 3, 5, 7]
// numbers.sort().reverse()
// console.log(numbers);

let arr = [1, 2, 3, 4, 5];
arr.forEach(addTwo);
let newArr = arr.map(addTwo)
function addTwo(value){
    return value+10;
}
// const addTwo = (value) => {
//   console.log(value+2);
// };
console.log(newArr);

