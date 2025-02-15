
# 🌟 Talentelgia Day Four Learning

## 🧩 Safe-Copy Using Spread Operator
### What is the Spread Operator?
The spread operator (`...`) allows you to create a shallow copy of arrays or objects, making it easier to avoid direct references to the original structure.

### Example: Safe-Copy
```javascript
// Safe copy of an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

// Safe copy of an object
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedArray); // [1, 2, 3]
console.log(copiedObject); // { a: 1, b: 2 }
```

## 🛠️ Objects
### What Are Objects?
Objects in JavaScript are collections of key-value pairs. They are used to store and manage data in a structured way.

### How to Create an Object
- **Using Object Literals**:
```javascript
const person = {
  name: "John",
  age: 30
};
```
- **Using `new Object()`**:
```javascript
const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
```

### How to Insert Keys and Values
```javascript
const user = {};
user.name = "Alice"; // Insert key and value
user.age = 25;
```

### How to Access Object Values
- **Dot Notation**:
```javascript
console.log(user.name); // "Alice"
```
- **Bracket Notation**:
```javascript
console.log(user["age"]); // 25
```

## 🔑 Object Methods
- **`Object.keys()`**: Retrieve all keys from an object.
```javascript
console.log(Object.keys(user)); // ["name", "age"]
```
- **`Object.values()`**: Retrieve all values from an object.
```javascript
console.log(Object.values(user)); // ["Alice", 25]
```
- **`Object.assign()`**: Merge objects or create a copy.
```javascript
const additionalInfo = { country: "USA" };
const updatedUser = Object.assign({}, user, additionalInfo);
console.log(updatedUser); // { name: "Alice", age: 25, country: "USA" }
```

## 🧩 Tasks
1. **R&D on Objects**: Explore advanced features like prototypes, nested objects, and deep cloning.
2. **Practice Scenario-Based Questions**:
   - Create and manipulate an object representing a shopping cart.
   - Use `Object.keys()` and `Object.values()` to iterate over an object.
   - Clone an object using the spread operator and update specific fields.
