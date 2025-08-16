const textInputField = document.getElementById("text-input");
// Get the input field and button elements
const mainCheckButton = document.getElementById("check-btn");
const resultField = document.getElementById("result");
let enteredString = textInputField.value // Initialize the input value

//the main function that checks if the input is a palindrome
// It listens for a click event on the button, retrieves the input value,
mainCheckButton.addEventListener("click",()=>{
    let enteredString = textInputField.value
    if (enteredString === "") {
        alert("Please input a value")
    }
    else {
    let cutUpString = enteredString.split("") // Split the input string into an array of characters
       let ourRegex = /[0-9a-zA-Z]/ // Define a regular expression to match alphanumeric characters
        const leftOver = cutUpString.filter((letter)=> letter.search(ourRegex) > -1) // Filter the array to keep only alphanumeric characters
        const leftOverReverse = leftOver.toReversed() // Reverse the filtered array
        console.log(leftOverReverse)
        if (leftOver.toString().toUpperCase() === leftOverReverse.toString().toUpperCase()) { // Compare the original and reversed arrays as strings, ignoring case
            // If they are equal, it means the input is a palindrome
            resultField.textContent = (`${enteredString} is a Palindrome`)
            console.log(`${enteredString} is a Palindrome`)
        }
        else {
            resultField.textContent = (`${enteredString} is not a Palindrome`)
            console.log(`${enteredString} is not a Palindrome`)
        }
    }

})