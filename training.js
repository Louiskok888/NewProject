// let num1 = [1,2,3,4,5]

// let num2 = [6,7,8,9,0]

// let total = num1.concat(num2)
// let newArray = [...num1, ...num2]

// console.log(num1)
// console.log(num2)
// console.log(total)
// console.log(newArray)

// let fruit = ["apple","pear","orange","banana","pineapple"]
// let num1 = [1,2,3,4,5]

// let index1 = fruit.indexOf("apple")
// let index2 = num1.indexOf(3)

// console.log(index1)
// console.log(index2)

// let fruit = ["apple","pear","orange","banana","pineapple"]
// let num1 = [1,2,3,4,5]

// let com1 = fruit.join("")
// let com2 = fruit.join(" ")
// let com3 = fruit.join("-")
// let com4 = fruit.join(",")
// let com5 = fruit.join("\n")

// console.log(com1)
// console.log(com2)
// console.log(com3)
// console.log(com4)
// console.log(com5)

// array.lastIndexOf(searchElement, fromIndex);

// let fruit = ["apple","pear","orange","banana","pineapple"]
// let num1 = [1,2,3,4,5,2,6,8,5,0,9,0,7,6,8,4,5,6,1,2,3,4,3,5,9,9,9,0,6,7]

// let result = fruit.lastIndexOf("orange")
// let result1 = num1.lastIndexOf(9,num1.length-1)

// console.log(result)
// console.log(result1)
// console.log(num1.length)

// let fruit = ["apple","pear","orange","banana","pineapple"]
// let num1 = [1,2,3,4,5]

// fruit.pop()

// console.log(fruit)

// let fruit = ["apple","pear","orange","banana","pineapple"]
// let num1 = [1,2,3,4,5]

// fruit.push("cherry","watermelon")
// num1.push("good")

// console.log(fruit)
// console.log(num1)

// while(num1.length < 10){
//     num1.push(5)
// }

// console.log(num1)

// array.slice(beginIndex, endIndex);

// let fruit = ["apple","pear","orange","banana","watermelon","cherry","pineapple","guava"]
// let num1 = [1,2,3,4,5,6,7,8,9,0]

// let slice1 = fruit.slice(1,4)
// let slice2 = fruit.slice(3)
// let slice3 = fruit.slice(-4)
// let slice4 = fruit.slice(2,-1)
// let slice5 = fruit.slice(-5,-2)

// console.log("1",slice1)
// console.log("2",slice2)
// console.log("3",slice3)
// console.log("4",slice4)
// console.log("5",slice5)

// let fruit = ["apple","pear","orange","banana","watermelon","cherry","pineapple","guava"]
// let num1 = [1,2,3,4,5,6,7,8,9,0]
// let copy = [...num1]
// num1.reverse()

// fruit.reverse()

// console.log(fruit)
// console.log(num1)

// let fruit = ["apple","pear","orange","banana","watermelon","cherry","pineapple","guava"]
// let num1 = [1,2,3,4,5,6,7,8,9,0]

// fruit.shift()

// console.log(fruit)

// let fruit = ["apple","pear","orange","banana","watermelon","cherry","pineapple","guava"]
// let num1 = [1,2,3,4,8,6,7,5,9,0]
// let num2 = [1,2,3,4,8,6,7,5,9,0]

// fruit.sort()
// let sequence = num1.sort((a,b)=>a-b)
// let reverse = num2.sort((a,b)=>b-a)

// console.log(fruit)
// console.log(sequence)
// console.log(reverse)

// array.splice(start, deleteCount, item1, item2, ..., itemN)

// let fruit = ["apple","pear","orange","banana","watermelon","cherry","pineapple","guava"]
// let num1 = [1,2,3,4,8,6,7,5,9,0]

// let removed = num1.splice(2,4)
// let removed2 = fruit.splice(1,3)

// console.log(num1)
// console.log(fruit)
// console.log(removed)
// console.log(removed2)

// let fruit = ["apple","pear","orange","banana","watermelon","cherry","pineapple","guava"]
// let num1 = [1,2,3,4,8,6,7,5,9,0]

// let str = fruit.toString()
// let str2 = num1.toString()

// console.log(str)
// console.log(str2)

// let date = new Date()
// let newDate = date.toString()
// console.log(newDate)

// let fruit = ["apple","pear","orange","banana","watermelon","cherry","pineapple","guava"]
// let num1 = [1,2,3,4,8,6,7,5,9,0]

// fruit.unshift("durian")
// num1.unshift(50)

// console.log(fruit)
// console.log(num1)

// let age = 5

// let permission = age >= 18 ? "You are permitted" : "You are forbidden"

// console.log(permission)

// <<<Tenary operator>>>

// let score = 85;            // Student's score
// let attendance = 90;       // Student's attendance percentage
// let extracurricular = true; // Whether the student participates in extracurricular activities

// let performance = (attendance >= 90)
//   ? (score >= 80 //if 90 and above, check if the score is 80 and above
//       ? (extracurricular ? "Excellent" : "Good") //if true, check izit extrcurricular, if true, Excellent, if false, good
//       : "Needs Improvement") //if false, needs improvement
//   : (score >= 80 //if less than 90, check if the score is 80 and above
//       ? "Good"  //if true, good
//       : "Needs Improvement"); //if false, needs improvement

// console.log(performance); // Output: "Excellent"

// let age = 25;
// let hasLicense = true;

// // if (age >= 18 && hasLicense) {
// //   console.log("You are eligible to drive.");
// // } else {
// //   console.log("You are not eligible to drive.");
// // }

// let eligible = age >= 18 && hasLicense ? "You are eligible to drive." : "You are not eligible to drive."

// console.log(eligible)

// let age = 18;
// let hasPermission = false;

// if (age >= 18 || hasPermission) {
//   console.log("Access granted.");
// } else {
//   console.log("Access denied.");
// }

// let fruit = ["apple","pear","orange","banana","watermelon","cherry","pineapple","guava"]
// let num1 = [1,2,3,4,8,6,7,5,9,0]
// let num2 = [1,2,3,4,8,6,7,5,9,0]
// let num3 = [1,2,3,4,8,6,7,5,9,0]

// num1.fill(0)
// num2.fill(0,4)
// num3.fill(0,2,6)

// console.log(num1)
// console.log(num2)
// console.log(num3)

// let num1 = [1,2,3,4,8,6,7,5,9,0]

// const evenNum = num1.filter(num => num % 2 == 0)

// console.log(evenNum)

// const users = [
//     {name: "Alice", age: "27"},
//     {name: "Bob", age: "18"},
//     {name: "Charlie", age: "31"},
// ]

// users.forEach(user => console.log(user.name))

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(num => {console.log(num * 2)});

// const users = [
//     {name: "Alice", age: "27"},
//     {name: "Bob", age: "18"},
//     {name: "Charlie", age: "31"},
// ]

// const findUser = users.find(user => user.name == "Alice")

// console.log(findUser)

// let num1 = [1,2,3,4,8,6,7,5,9,0]

// const flattened = num1.flat()

// console.log(flattened)

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(num => num * 2);

// console.log(doubled);
// console.log(numbers)

// const sentences = ['Hello world!', 'How are you?', 'I am happy today']

// const words = sentences.flatMap(sentence => sentence.split(" "))

// console.log(words)

// const numbers = [1,2,3,4]

// const result = numbers.flatMap(num => [num, num*2])

// console.log(result)

// const sentence = "Hello from the world"
// const word1 = sentence.split("")
// const word2 = sentence.split(" ")
// const word3 = sentence.split(",")
// const word4 = sentence.split()
// const word5 = sentence.split(" ", 3)

// console.log(word1)
// console.log(word2)
// console.log(word3)
// console.log(word4)
// console.log(word5)

// const numbers = [1,2,3,4]
// const sumRight = numbers.reduceRight((acc,curr) => acc + curr,0 )
// console.log(sumRight)

// const arr = [1,2,3,4,5]
// console.log(Array.isArray(arr))

// class Car {
//     constructor(make, model, year){
//         this.make = make
//         this.model = model
//         this.year = year
//     }
// }

// const myCar = new Car("Toyota", "Corolla", 2020)

// console.log(myCar.make)
// console.log(myCar.model)
// console.log(myCar.year)

// class Library {
//   constructor(name, books = []) {
//     this.name = name;
//     this.books = books;
//   }

//   addBook(book) {
//     this.books.push(book);
//   }
//   showBooks() {
//     console.log(`${this.name} Library has the following books:`);
//     this.books.forEach((book) => console.log(book));
//   }
// }

// class Employee {
//   constructor(name, staffs = []) {
//     this.name = name
//     this.staffs = staffs
//   }
// }


// function renameObject(obj, newName){
//   if(obj && obj.hasOwnProperty(('name'))){
//     obj.name = newName
//   }
// }


// const mylibrary = new Library("City Central", ["Book 1, Book 2"]);
// const secondLibrary = new Library();

// const myEmployee = new Employee("Headquater", ["Lee", "Tan"])

// mylibrary.addBook("Book 3");
// mylibrary.addBook("Book A");
// mylibrary.addBook("Book B");

// secondLibrary.addBook("Book 4")
// secondLibrary.addBook("Book 5")


// renameObject(mylibrary, "City Square")
// renameObject(mylibrary, "City Hall")
// renameObject(secondLibrary, "Big Hall")


// console.log(mylibrary);
// console.log(secondLibrary);

// mylibrary.showBooks();
// secondLibrary.showBooks()

// console.log(Employee)
// console.log(myEmployee)

<
// testing 1
// testing

// adding new features 

