// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

//Create a function named boilingPoint 
    //It will take a number argument named temp 
        //this will allow us to compare this number to boiling point determining if it is below above or at boiling point 
    // we need to create a conditional allowing the computer to make decisions hense forth a decision tree 
        //if the temp > 212F 
            //return `${temp} is above boiling point!`
        //else if allowing us to give another condition. is the temp === 212F
            // return `${temp} is at boiling point!`
        // else giving us a catch all for all other numbers lower than 212
            //return `${temp} is below boiling point!`
        //Call the function boilingPoint() in a console.log
    
    const boilingPoint = (temp) => {
        if(temp > 212){
            return `${temp} is above boiling point!`
        } else if (temp === 212){
            return `${temp} is at boiling point!`
        } else {
            return `${temp} is below boiling point!`
        }
    }
            console.log(boilingPoint(temp1))
            console.log(boilingPoint(temp2))
            console.log(boilingPoint(temp3))

                //Output ---> 42 is below boiling point
                //Output ---> 350 is above boiling point
                //Output ---> 212 is at boiling point 
                //Also tried with several other numbers all were represented with expected outputs 


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// for my assessment i will use built in methods for these two arrays instead of building a function 
    //In order to see the two arrays in one we will assign a var named bothArrays to the following step 
    //the built in method .concat() allows us to combine two arrays         
        //Once they are merged we can use the other built in method .length to count the amount of indexs in the array
        //We will console.log() bothArrays.length

        var bothArrays = myNumbers1.concat(myNumbers2)
        console.log(bothArrays.length)

        //Output ---> 10 

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

const currentCohort = "Charlie 2022"

   


    



   
// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

    // In order to go through each index of the array i created a for loop
        // I iterated the loop by having i=0, having it run till i has gone through every index of myArray, and i++ which allows it to keep advancing 
    // we have the means of getting through the array but we decide if its even or odd through a decision tree or an if else statement
        // if i % which means remainder of whatever its divided by in this case 2 === 0
            //if i divided by 2 has no remaineder then do whatever is in the code block if not move on to else 
        // once the if statement comes back true it will log even if the if statement comes out false it will log odd

for(let i=0; i < myArray.length; i++){
    if(i % 2 === 0){
        console.log('even')
    } else {
        console.log('odd')
    }
}
        //Output ----> odd even odd even odd even



// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

    //Create an arrow syntax function that takes in two arguments in this case two different numbers that i labeled num1, num2
        //we need a conditional statement that decides which of the two numbers is greater and subtracts the smaller one from the bigger one 
    //I compared if num1 > num2 if that boolean statement is true 
        //returns num1 - num2 because num1 was greater 
    //If it turns out to be false the num2 - num1 which means num2 was greater 

const subtraction = (num1, num2) => {
    if (num1 > num2){
        return num1 - num2
    } else {
        return num2 - num1
    }
}

console.log(subtraction(number1, number2))
console.log(subtraction(number3, number4))
console.log(subtraction(1937, 9723))

    //Output ---> 42
    //Output ---> 3
    //Output ---> and a random number trial gave the result of 7786 which verified by a phone calculator was true 

