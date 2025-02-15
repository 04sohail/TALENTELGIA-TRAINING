// at() Questions
// Question 1: Given the string "Programming", use the at() method to find the character at the 7th position.

// let sampleStr = "Programming"
// let charAt7th = sampleStr.at(7)
// console.log(charAt7th)

// Question 2: From the string "Code with Fun", use at() to get the last character using a negative index.

// let sampleStr = "Code with Fun"
// let lastChar = sampleStr.at(-1)
// console.log(lastChar);

// Question 3: Use at() to retrieve the 1st character of the string "Learn" using both a positive and negative index. Are the results the same?

// let sampleStr = "Learn"
// let positiveIndexLast = sampleStr.at(sampleStr.length-1)
// let negativeIndexLast = sampleStr.at(-1)
// console.log(positiveIndexLast);
// console.log(negativeIndexLast);

// Question 4: Given the string "Technology", what will str.at(15) return? Why?

// let sampleStr = "Technology"
// console.log(sampleStr.length);
// console.log(sampleStr.at(15));  // It will return undefined bcoz the strings length is 10 and we are finding the index 15

// Question 5: Use the at() method to extract the 3rd character from the string "Innovation" and check whether it is a vowel.

// let sampleStr = "Innovation";
// let thirdChar = sampleStr.at(2);
// if (["a", "e", "i", "o", "u"].includes(thirdChar)) {
//   console.log(`The character is "${thirdChar}" and it is not a VOWEL`);
// }else{
//     console.log(`The character is "${thirdChar}" and it is a VOWEL`);
// }

// charAt() Questions:
// Question 1: Given the string "Hello, World!", use charAt() to find the character at index 7.

// let sampleStr = "Hello, World!"
// let searchChar = sampleStr.charAt(6)
// console.log(`The character at 7th index is "${searchChar}"`);

// Question 2: From the string "JavaScript", retrieve the first and last characters using charAt().

// let sampleStr = "JavaScript";
// let firstChar = sampleStr.charAt(0)
// let lastChar = sampleStr.charAt(sampleStr.length-1)
// console.log(`First Index CHAR = ${firstChar}, Last Index CHAR = ${lastChar}`);

// Question 3: Use charAt() to extract the middle character of the string "Developers". Handle cases where the string length is even.

// const mean = (length)=>{
//     let sum = 0;
//     for (let i = 1; i <= length; i++){
//         sum += i
//     }
//     return sum / length
// }

// let sampleStr = "Sohail";
// if (sampleStr.length % 2 == 0) {
//   let firstMiddle = sampleStr.charAt(sampleStr.length / 2 - 1);
//   let secondMiddle = sampleStr.charAt(sampleStr.length / 2);
//   console.log(
//     `Both Middle Characters Are "${firstMiddle}" And "${secondMiddle}"`
//   );
// } else {
//     let middleChar = sampleStr.charAt(mean(sampleStr.length)-1)
//   console.log(`Middle Character = "${middleChar}"`);
// }

// Question 4: What will charAt() return if the index provided is out of range for the string "Learning"?
// let sampleStr = "Brendan Eich"
// console.log(sampleStr.charAt(200)); // NOTHING

// Question 5: Write a function that takes a string and an index as arguments and returns a message saying:
// "The character at index X is Y" if the index is valid.
// "Invalid index" if the index is out of range.

// const findChar = (sampleStrParam, index)=>{
//     if (index < sampleStr.length & index >= 0){
//         let searchChar = sampleStrParam.charAt(index)
//         console.log(`The Character At Index ${index} Is "${searchChar}"`);
//     }else{
//         console.log("Sorry The Index Is Out Of Range !");
//     }
// }

// let sampleStr = "Brendan Eich"
// findChar(sampleStr, 1)

// Question 1: Given the string "ABC", use charCodeAt() to find the Unicode value of the character at index 1.

// let sampleStr = "ABC"
// let charCode = sampleStr.charCodeAt(1)
// console.log(charCode);

// Question 2: From the string "JavaScript", get the Unicode value of the first character.

// let sampleStr = "JavaScript"
// let charCode = sampleStr.charCodeAt(0)
// console.log(charCode);

// Question 3: Write a function that takes a string and an index, and returns whether the Unicode value of the character at that index is odd or even.

// const findAns =(sampleStrParam, index)=>{
//     let searchCharCode = sampleStrParam.charCodeAt(index)
//     findOddEven(searchCharCode)
// }

// const findOddEven = (code)=>{
//     if (code % 2 == 0){
//         console.log("EVEN")
//     }else{
//         console.log("ODD");
//     }
// }

// let sampleStr = "ABCD"
// findAns(sampleStr, 0)

// Question 4: Use charCodeAt() to get the Unicode value of the space character in the string "Hello World".

// let sampleStr = "Hello World"
// let searchCharCode = sampleStr.charCodeAt(5)
// console.log(searchCharCode);

// Question 5: Find the difference between the Unicode values of the first and last characters of the string "Dynamic".

// let sampleStr = "Dynamic"
// let firstCharCode = sampleStr.charCodeAt(0)
// let lastCharCode = sampleStr.charCodeAt(sampleStr.length-1)
// console.log(`Difference between first char code ${firstCharCode} and last Char Code ${lastCharCode} = ${firstCharCode-lastCharCode}`);

// slice() Questions:
// Question 1: Extract the substring "World" from the string "Hello, World!" using slice().

// let sampleStr = "Hello, World!"
// let subString = sampleStr.slice(7, 12)
// console.log(subString);

// Question 2: From the string "JavaScript", use slice() to extract the first 4 characters.

// let sampleStr = "JavaScript"
// let subString = sampleStr.slice(0, 4)
// console.log(subString);

// Question 3: Using slice(), retrieve the last 3 characters of the string "Programming".

// let sampleStr = "Programming"
// let subString = sampleStr.slice(-3)
// console.log(subString);

// Question 4: What will happen if you pass a negative start index and a positive end index to the slice() function for the string "Learning"? Test it by slicing from   -4 to 6.

// let sampleStr = "Learning"
// let subString = sampleStr.slice(-4, 6)
// console.log(subString);

// Question 5: Write a function that uses slice() to remove the first and last characters of any given string and returns the result.

// const firstLast=(sampleStr)=>{
//     let firstChar = sampleStr.slice(0, 1)
//     let lastChar = sampleStr.slice(-1)
//     return [firstChar, lastChar]
// }

// let sampleStr = "Brendan Eich"
// let subString = firstLast(sampleStr)
// console.log(subString)

// Question 1: Extract the substring "Java" from the string "JavaScript" using substring(). Use the appropriate start and end indices.

// let sampleStr = "JavaScript"
// let subString = sampleStr.substring(0, 4)
// console.log(subString);

// Question 2: What happens if the starting index is greater than the ending index in substring()? Test this by reversing the start and end indices while extracting "Script" from "JavaScript".

// let sampleStr = "JavaScript"
// let subString = sampleStr.substring(sampleStr.length, 4)
// console.log(subString);

// Question 3: Write a function that uses substring() to extract all characters from a given string starting at a given index till the end.

// let sampleStr = "Brendan Eich"
// let subString = sampleStr.substring(0)
// console.log(subString);

// Question 1: Extract the substring "World" from the string "Hello, World!" using substr() with the correct start index and length.

// let sampleStr = "Hello, World!"
// let subString = sampleStr.substr(7)
// console.log(substr);

// Question 2: What will substr() return if you provide a negative starting index? Test this on the string "JavaScript" by using -4 as the start index and 3 as the length.

// let sampleStr = "JavaScript"
// let subString = sampleStr.substr(-4, 3)
// console.log(subString);

// Convert the string "hello world" to uppercase using toUpperCase().

// let sampleStr = "hello world"
// let upperCase = sampleStr.toUpperCase()
// console.log(upperCase);

//  Write a function that takes a string as input and returns the same string in uppercase if its length is greater than 5.

// Question 3: How would you combine toUpperCase() with slicing to capitalize only the first letter of the string "javascript"? Implement this logic.

// let sampleStr = "javascript"
// let upperCase = sampleStr.at(0).toUpperCase() + sampleStr.slice(1)
// console.log(upperCase);

// Question 1: Given the array ["apple", "banana", "cherry"], use join() to create a single string separated by commas.

// let sampleArr = ["apple", "banana", "cherry"]
// let joinedArr = sampleArr.join(",")
// console.log(joinedArr);

// Question 2: How would you use join() to combine the array ["one", "two", "three"] into a string with spaces between the words?

// let sampleArr = ["apple", "banana", "cherry"]
// let joinedArr = sampleArr.join(" ")
// console.log(joinedArr);

// Question 3: Write a function that takes an array of numbers and returns a single string where the numbers are separated by a hyphen (-).

// const joinFunction = (arr)=>{
//     return arr.join('-')
// }

// let sampleArr = [1, 2, 3, 4, 5]
// let joinedArr = joinFunction(sampleArr)
// console.log(joinedArr);

// Question 1: Given the string " Hello, World! ", use trim() to remove the leading and trailing spaces.

// let sampleStr = " Hello, World! "
// let trimmedstr = sampleStr.trim()
// console.log(trimmedstr);

// Question 3: How would you combine trim() with a check to ensure that user input (e.g., " ") is not just whitespace? Write the logic.

// let sampleStr = " s "
// if (sampleStr.trim().length === 0){
//     console.log("Not a valid input");
// }else{
//     console.log("VALID");
// }

// Use padStart() to ensure the string "123" becomes "000123" by adding leading zeros.

// let sampleStr = "123"
// let paddedStr = sampleStr.padStart(6, "0")
// console.log(paddedStr);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
String Manipulation Scenarios
Username Validation:
Write a function that validates a username based on the following rules:

It must not have spaces.
It must start with a letter.
Its length must be at least 5 characters.
For example, " user1" or "123John" should be invalid, while "JohnDoe" should be valid.
Title Case Conversion:
Write a function that takes a sentence and returns it in title case (first letter of each word capitalized). For example:

Input: "hello world from javascript"
Output: "Hello World From JavaScript".
Find and Replace Words:
Given a sentence, replace all occurrences of the word "bad" with "good". Ensure it works case-insensitively. For example:

Input: "This is a bad day. Bad things happened!"
Output: "This is a good day. Good things happened!".
Form Field Auto-Correction:
Create a function that takes a user's email input and:

Removes any leading or trailing spaces.
Converts it to lowercase.
Validates if it contains "@" and ".".
Return "Valid email" or "Invalid email" based on the checks.
String Compression:
Write a function that compresses a string by replacing consecutive repeating characters with the character followed by the count. For example:

Input: "aaabbcddd"
Output: "a3b2c1d3".
Array Manipulation Scenarios
Shopping Cart Management:
Implement a function to manage a shopping cart array. The function should:

Add an item to the cart (push()).
Remove the last item if the cart exceeds 5 items (pop()).
Print the cart contents as a comma-separated string (join()).
Filter Search Results:
You have an array of product names: ["Laptop", "Tablet", "Smartphone", "Smartwatch"]. Write a function to return all products that start with "Smart".

Sort and Display High Scores:
You have an array of scores: [45, 78, 12, 89, 34]. Write a function that:

Sorts the scores in descending order.
Returns only the top 3 scores.
Combined Scenarios
Sentence Word Counter:
Write a function that takes a paragraph and returns the count of each unique word in the paragraph. Ignore case and punctuation.

CSV Data Parser:
Given a CSV string like "name,age,city\nJohn,25,New York\nJane,30,Los Angeles", write a function to split it into an array of objects:

javascript
Copy
Edit
[
  { name: "John", age: "25", city: "New York" },
  { name: "Jane", age: "30", city: "Los Angeles" }
]

*/


// const users = [
//   {
//     id: 1,
//     name: "Charlie Davis",
//     age: 28,
//     email: "john.doe@example.com",
//     address: "123 Main St, Anytown, USA",
//     phone: "555-1234",
//     isActive: true,
//     role: "admin",
//     createdAt: "2023-01-01",
//     updatedAt: "2023-01-10"
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     age: 34,
//     email: "jane.smith@example.com",
//     address: "456 Elm St, Othertown, USA",
//     phone: "555-5678",
//     isActive: false,
//     role: "user",
//     createdAt: "2023-02-01",
//     updatedAt: "2023-02-10"
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     age: 25,
//     email: "alice.johnson@example.com",
//     address: "789 Oak St, Sometown, USA",
//     phone: "555-8765",
//     isActive: true,
//     role: "user",
//     createdAt: "2023-03-01",
//     updatedAt: "2023-03-10"
//   },
//   {
//     id: 4,
//     name: "Bob Brown",
//     age: 45,
//     email: "bob.brown@example.com",
//     address: "101 Pine St, Anycity, USA",
//     phone: "555-4321",
//     isActive: false,
//     role: "moderator",
//     createdAt: "2023-04-01",
//     updatedAt: "2023-04-10"
//   },
//   {
//     id: 5,
//     name: "Charlie Davis",
//     age: 30,
//     email: "charlie.davis@example.com",
//     address: "202 Maple St, Anyville, USA",
//     phone: "555-6789",
//     isActive: true,
//     role: "user",
//     createdAt: "2023-05-01",
//     updatedAt: "2023-05-10"
//   }
// ];

// // I want to check if there is any user exist with age less than 20
// const searchLessThanTwenty = (element)=>{
//   return element.age < 20 
// }

// let newArr = users.some(searchLessThanTwenty)
// console.log(newArr);


