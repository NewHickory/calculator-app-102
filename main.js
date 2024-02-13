// These variable hold the numbers we want to do operations on and the name of the operation we want to perform.
// They are expected to change so we use the "let" keyword.

let currentInput = null

let firstNum = null
let secondNum = null

let result = null

let operation = null

// this function takes in the number button you push and concats it to the currentInput variable
// if the decimal button is pushed a second time on the same number, it shows an error message

const saveInput = (lastInput) => { 
  if (currentInput === null) {
    currentInput = lastInput
  }
  else if (currentInput.includes(".") && lastInput === ".") {
    alert("You can't enter two decimal places in the same number.")
  }
  else {
    currentInput += lastInput
  }
  console.log("lastInput: ", lastInput)
  console.log("Type of lastInput: ", typeof(lastInput))
  console.log("currentInput: ", currentInput)
  console.log("Type of currentInput: ", typeof(currentInput))
  putInputInElement(currentInput)
}

// this function takes in two argument/numbers and returns the sum of them
const add = (numA, numB) => {
  const sum = numA + numB
  return sum
}

// this function takes in two argument/numbers and returns the difference of them
const subtract = (numA, numB) => {
  const difference = numA - numB
  return difference
}

// These variables are already defined but that don't point to functions. It's up to you to build the functions to complete your calculator use:

const multiply = (numA, numB) => {
  // * to get a product then return it
  const product = numA * numB
  return product
  // Open up the inspector tool in Chrome and select the Console tab to see what this functions is "logging out" to the console.
  console.log(numA, numB)
}

const divide = (numA, numB) => {
  // / to get a quotient,
  const quotient = numA / numB
  return quotient
}

const modulus = (numA, numB) => {
  // and % to get a remainder.
  const remainder = numA % numB
  return remainder
}

// This function changes the "operation" variable to be equal to the "id" of the button we choose on the web page.
// It also converts to currentInput variable to a number and saves it as a new variable named operand.
// Then it set the currentInput variable to null again; now ready for new number input.
const changeOperation = (chosenOperation) => {
  
  if (result === null) {
    firstNum = Number(currentInput)
    currentInput = null
  }
  else {
    firstNum = Number(result)
  }
  
  if (chosenOperation === "")
  operation = chosenOperation
  // Log the value and data type of the first operand value as well as the value of the operation variable.
  console.log("firstNum: ", firstNum)
  console.log("firstNum type: ", typeof(firstNum))
  console.log("Chosen Operation: ", operation)
}

// Show last input number
const putInputInElement = (currentInput) => {
  // access the DOM by writing "document" then use the method "getElementById" and pass it the id, "input".
  document.getElementById("input").innerHTML = currentInput
}

// In order to show the user their results we have to access the DOM and stick in the value
const putResultInElement = (operationResults) => {
  // access the DOM by writing "document" then use the method "getElementById" and pass it the id, "result".
  document.getElementById("result").innerHTML = operationResults
}

// The function uses the value of "operation" variable to determine which operation function it should use on the number: add, subtract, multiply, divide, or modulus
const equals = () => {
  
  secondNum = Number(currentInput)
  currentInput = null
  
  switch (operation) {
    case "addition":  putResultInElement(add(firstNum, secondNum)) 
    break;
    case "subtraction": putResultInElement(subtract(firstNum, secondNum)) 
    break;
    case "multiplication": putResultInElement(multiply(firstNum, secondNum))
    break;
    case "division": putResultInElement(divide(firstNum, secondNum))
    break;
    case "modulus": putResultInElement(modulus(firstNum, secondNum))
    break;
    default: "Choose an operation"
  }

  result = document.getElementById("result").innerHTML
  console.log("Current Result: ", result)
}

const all_clear = () => {
  putInputInElement(null)
  putResultInElement(null)
  firstNum = null
  secondNum = null
  currentInput = null
  result = null
}



