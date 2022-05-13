// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: undefined because .length() is a built in method that can only be used on arrays
// b) Verify and explain: I was wrong the .length without () can be used on a string but the .length() with quotes can only be used on an array


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: it will log index of 4 which is o
// b) Verify and explain: I was right when a number is in brackets that butt up against a string or array it will log that index 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: it should log ruby 
// b) Verify and explain: I was right the variable index is assigned the number one there for it will take the first index which is ruby. Another thing to mention is that when counting places in an array or string the very first index is zero thats why it was not JavaScript. 


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: it should uppercase every letter in the array Output ---> SATURDAY SUNDAY
// b) Verify and explain: I was wrong the answer was undefined. The .toUpperCase() only works with strings. Because this is an array it would not work if you wanted to capatilize each letter you would have to convert the weekendDays array to a string and the .toUpperCase()


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: it should log the word number 
// b) Verify and explain: I was correct. It logs the word numbers because in the console.log() its asking the typeof the outcome of dataTypes.length. Which .length returns a number in this case 3. The typeof was then going off of the number 3 which logs to the console the word number.  
