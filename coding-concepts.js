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
// b) Verify and explain: I was wrong the .length without () can be used on a string but the .length() with quotes can only be used on an array. And i failed to notice if there were () which led to the false answer. And even if i were to guess the number i thought it wouldve been which was 9, I forgot the length method starts at index of 1 and indexs with [] are the ones that start at index 0.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: it will log index of 4 which is o
// b) Verify and explain: I was right when a number is in brackets that butt up against a string or array it will log that index. And the reason it is 'o' instead of 'l' is because indexs begin counting at 0.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: it should log 'Ruby' 
// b) Verify and explain: I was right the variable index is assigned the number 1 there for it will take the first index which is ruby. Another thing to mention is that when counting indexes with [] the computer begins counting at 0 thats why "Ruby" was consoled instead of "JavaScript"
// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: it should uppercase every letter in the array Output ---> SATURDAY SUNDAY
// b) Verify and explain: I was wrong the answer was undefined. The .toUpperCase() only works with strings. Because this is an array it would not work if you wanted to capatilize each letter you would have to convert the weekendDays array to a string using .join('') and the .toUpperCase()


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: it should log the word number 
// b) Verify and explain: I was correct. It logs the word numbers because in the console.log() its asking the typeof the outcome of dataTypes.length. Which .length returns a number in this case 3. The typeof was then going off of the number 3 which logs to the console the word number.  
