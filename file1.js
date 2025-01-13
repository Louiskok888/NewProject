// let total = 10;

// function cal() {

//     for (i=0; i<10; i++) {
//         total += 1
//         console.log(total)
//     }
// }

// cal()
// console.log("hello")

// const cal2 = () => {
//     let total = 10
//     for (i=0; i<20; i++) {
//         total+= 2

//     console.log(total)
//     }
// }

// cal2()
// cal2()

// function cal() {
//   let total = 10;
//   for (i = 0; i < 10; i++) {
//     total += 1;
//     console.log(total);
//   }
// }

// cal();

// let i = 0
// while (i < 10) {
// console.log(i)
// i++
// }

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// const numbers = [1,9,4,6,32,78,214]

// for (let num of numbers) {
//   console.log(num)
// }

// const fruits = ["apple", "orange", "pear", "banana"]

// fruits.forEach(function (fruit){
//   console.log(fruit)
// })

// const numbers = [12,47,56,998]

// numbers.forEach(function(number){
//   console.log(number)
// })

// const fruits = ["apple", "orange", "pear", "banana"]

// fruits.forEach((fruit)=>{
//     console.log(fruit)
// })

// let numbers = [10, 20, 30, 40];

// numbers.forEach((value, index, array) => {
//     array[index] = value * 2; // Modify each element in the array
//   console.log(array[index]);
//   console.log(numbers)
// });

// function reverseString(str) {
//   return str.split("").reverse().join("")
// }

// console.log(reverseString("hello")); // Output: "olleh"

// let word = "intelligence"

// let name

// let wordSplit = word.split("")

// let reverse = wordSplit.reverse()

// let join = wordSplit.join("")

// word = 3
// word = "hello"

// name = "louis"
// name = 5

// console.log(word)
// console.log(name)

// group1 = [1,5,89,456]

// group2 = [26,9,145,2222]

// function findLargestNumber(arr) {
//   let largest = arr[0]
//   for(i=1; i<arr.length;i++){
//     if(arr[i]>largest){
//       largest = arr[i]
//     }
//   }
//   return largest
// }

// result = findLargestNumber(group1)

// result2 = findLargestNumber(group2)

// console.log(result, result2)

// console.log(findLargestNumber([1, 2, 3, 125, 5])); // Output: 5

// let numbers = Math.max(1,85,368,14,23,789,6666,15,9,736,5)

// console.log(numbers)

// let maxnum

// function findLargestNumber(arr){
// return maxnum = Math.max(...arr)
// }

// findLargestNumber([1,89,6556,789])

// console.log(maxnum); // Output: 9

// findLargestNumber([-1, -5, -3, -9, -2]); // Output: -1

// function findLargestNumber(arr) {
//   let largest = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     console.log(i, "hello")
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return console.log(largest);

// }

// findLargestNumber([27777, 8977, 774, 123,2,9859,7,8,5,3,2,76]);

// console.log(maxnum);

// function isPalindrome(str) {
//   let lowerStr = str.toLowerCase()
//   let reversed = lowerStr.split("").reverse().join("")
//   return reversed === lowerStr
// }

// console.log(isPalindrome("madam")); // Output: true
// console.log(isPalindrome("hello")); // Output: true

// function fizzbuzz(n) {
//   for (i = 0; i < n.length; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 == 0) {
//       console.log("fizz");
//     } else if (i % 5 == 0) {
//       console.log("buzz")
//     } else {
//       console.log(i)
//     }
//   }
// }

// fizzbuzz(30)

// function fizzBuzz(n) {
//   for (let i = 0; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// // Test case: FizzBuzz for numbers from 1 to 15
// fizzBuzz(15);

// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return console.log(count);
// }

// countVowels("hello")
// countVowels("lofgthyjkklp;wertyuip")

// // let numbers = [1,2,3,4,5]
// // let removed = numbers.pop()

// // console.log(numbers)
// // console.log(removed)

// // let numbers = [10, 20, 30, 40];
// // while (numbers.length > 0) {
// //     console.log(numbers.pop());  // Removes the last element and prints it
// // }
// // // Output:
// // // 40
// // // 30
// // // 20
// // // 10

// // let fruits = ["apple", "orange", "pear"]
// // let newFruit = fruits.push("banana")

// // console.log(fruits)
// // console.log(newFruit)

// let numbers = [1,2,3,4,5,6]

// let sliced1 = numbers.slice(0)
// let sliced2 = numbers.slice(1,4)
// let sliced3 = numbers.slice(-3)
// let sliced4 = numbers.slice(2,-1)
// let sliced5 = numbers.slice(2)
// let sliced6 = numbers.slice(1,-1)



// console.log(sliced1)
// console.log(sliced2)
// console.log(sliced3)
// console.log(sliced4)
// console.log(sliced5)
// console.log(sliced6)

// let numbers1 = [2,3,6,7,1,8,9]
// numbers1.sort()
// console.log(numbers1)

// let numbers2 = [2,13,56,72,14,81,9]
// numbers2.sort((a,b)=>a-b)
// console.log(numbers2)

// let numbers3 = [2,13,56,72,14,81,9]
// numbers3.sort((a,b)=>b-a)
// console.log(numbers3)

// let people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 }
// ];

// // Sorting by age (ascending)
// people.sort((a, b) => a.age - b.age);

// console.log(people);
// // Output: [{ name: "Alice", age: 25 }, { name: "John", age: 30 }, { name: "Bob", age: 35 }]

// let originalArray = [1, 3, 2];
// let sortedArray = [...originalArray].sort();  // Using spread operator to create a shallow copy

// console.log(sortedArray)

// let board = []

// board[0] = new Array(3)
// board[1] = new Array(3)
// board[2] = new Array(4)


// board[0][0] = 'x'
// board[0][1] = 'o'
// board[0][2] = 'x'

// board[1][0] = 'x'
// board[1][1] = 'o'
// board[1][2] = 'x'

// board[2][0] = 'x'
// board[2][1] = 'o'
// board[2][2] = 'x'


// console.log(board)

// computeC

// [0][0]  [0][1]  [0][2]
// [1][0]  [1][1]  [1][2]
// [2][0]  [2][1]  [2][2]

// async function parallelTasks() {
//     const [task1, task2] = await Promise.all([
//         new Promise(resolve => setTimeout(() => resolve('Task 1 complete'), 1000)),
//         new Promise(resolve => setTimeout(() => resolve('Task 2 complete'), 500))
//     ]);
    
//     console.log(task1);  // Output: Task 1 complete
//     console.log(task2);  // Output: Task 2 complete
// }

// parallelTasks();


// Simulating an asynchronous function that could fail
// async function getData() {
//     try {
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto'); 
//         const data = await response.json();
//         console.log(data.species.url);

//     } catch (error) {
//         console.error('Error occurred:', error); // Handle error gracefully
//     }
// }

// getData();


// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(response => response.json())   // Parse JSON response
//   .then(data => {
//     console.log(data);  // Handle the data
//   })
//   .catch(error => {
//     console.error('Error:', error);  // Handle errors
//   });
