
let textInput = document.querySelector('#textInput');
let everyInput = [];
let output = document.querySelector(".numberOutput");

textInput.addEventListener('change', function (event) {
  everyInput = event.target.value.split('');
});

const allButtons = document.querySelectorAll("#calc_buttons");

for (let button of allButtons) {
  button.addEventListener('click', function (event) {
    everyInput.push(event.target.innerText);
    textInput.value = everyInput.join(" ");
  })
}

document.querySelector("#eq").addEventListener("click", function (event) {
  let result = eval(everyInput.join(""));
  textInput.value = result;
  document.querySelector("#result p").innerHTML += everyInput.join(" ") + "=" + result + "<br>";
  everyInput = [];
})

document.querySelector("#c").addEventListener("click", function (event) {
  everyInput = [];
  textInput.value = "";
})

function reverse() {
  let input = everyInput; // reads global variable containing input value as an array
  let reverse = input.reverse().join(""); // reverse the array and turns it in to a string
  return reverse;
}

//1b
document.querySelector("#reverseNumbers").addEventListener("click", function (event) {
  reverse = reverse()
  document.querySelector(".numberOutput").innerHTML = reverse; // prints the string to the page
})

//2b
document.querySelector("#palindrom").addEventListener("click", function (event) {
  reverse = reverse()
  if (everyInput === reverse) {
    output.innerHTML = "True, the number you put in is a palindrom";
  } else {
    output.innerHTML = "False, the number you put in is not a palindrom"
  }
})

//3b
document.querySelector("#uniqueNumbers").addEventListener("click", function (event) {
  let input = everyInput.sort();//reads global varable containgn input value as an array sorts the numbers in the array
  let unique = true
  for (i = 1; i < input.length; i++) {//loops through the array to see if the values from intput is unique
    if (input[i] == input[i - 1]) { // if value matches previous values they are  not unique
      unique = false;
      break; // no need to go further
    }
  }
  output.innerHTML = "The numbers are unique: " + unique// Prints the string to the page
})

//4b
document.querySelector("#censor").addEventListener("click", function (event) {
  let input = [...everyInput]; //reads global variabel containing input valur as an array
  for (i = 0; i < 3; i++) {
    input[i] = "*";//replace the caracter with *
  }
  output.innerHTML = input.join(""); //prints the result to the page
})

//5b
document.querySelector("#addingArrays").addEventListener("click", function (event) {
  let input1 = everyInput; //reads global variable containing input value as an array
  let input2 = everyInput; // a second array with the same value as the first one. Just to have two to add together
  let inputTotal = []; // the array with the new values
  for (i = 0; i < input1.length; i++) {//loops through the two arrays and adds the single numbers togehter
    inputTotal[i] = parseInt(input1[i]) + parseInt(input2[i]);//add values with the same index from the two arrays
  }
  output.innerHTML = inputTotal; // prints the string to the page
}
)

//6
function date() {
  let today = new Date() // fetches information about current date and time with the metod new Date
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] // an array of days for the queryselector to loop through
  document.querySelector(".day").innerHTML = "Today is: " + days[today.getDay()];
}
date(); // run on page load

function addZero(i) { // a function for adding a zero if the data we get from new Date is a singular
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function time() {
  var d = new Date();
  var h = d.getHours(); // uses the method getHours to fetch the hour info from the date object
  var m = addZero(d.getMinutes()); // uses the method getMinutes to fetch the minute info from the date object
  var s = addZero(d.getSeconds()); // uses the method getSeconds to fetch the second info from the date object
  document.querySelector(".time").innerHTML = "Current time is: " + h + ":" + m + ":" + s; // prints the string to the page
}
time(); // run on page load

//7b
document.querySelector("#language").addEventListener("click", function (event) {
  let input = document.querySelector("#textInput2").value.split("");  // reads the value from the inputfield as a string and turn in in to an array
  let vowles = ["a", "o", "u", "å", "e", "i", "y", "ä", "ö"] // an array of all vowles
  for (i = 0; i < input.length; i++) { // loops through the array to see if the index value is equal to a wovel If it isn't a wovle it will trigger the if-statement
    let c = input[i]; // current characters
    for (j = 0; j < vowles.length; j++) { // loop through each vowel
      if (c == vowles[j]) {
        break; // characters is a vowel, no need to continue this loop
      }
    }
    if (j == 9) { // if character is not a vowel j will equal the lenght of the vowel array, ie, loop ran to the end
      input[i] = c + "o" + c; // append rövarspråkets additional characters to the array item
    }
  }
  document.querySelector(".language").innerHTML = input.join(""); // takes the array, turn it into a string 
})


document.querySelector("#karpsravor").addEventListener("click", function (event) {
  let ravor = document.querySelector("#textInput2").value.split(""); // read rövarspråket string from page and split into an array per character
  let vowles = ["a", "o", "u", "å", "e", "i", "y", "ä", "ö"]
  let output = ""; // initiate a translated output string
  for (i = 0; i < ravor.length; i++) { // loops through each character in ravor array
    let c = ravor[i]
    for (j = 0; j < vowles.length; j++) {// loops through each vowel
      if (c == vowles[j]) {
        break; // break loop and continue to the following block
      }
    }
    if (j == 9) { // if character is not a vowel j will equal the lenght of the vowel array, ie, loop ran to the end
      i += 2 // jump forward tWo characters in ravor array to skip rövarspråkets character additions
    }
    output += ravor[i] // concatenate current character to the output string
  }
  document.querySelector(".ravor").innerHTML = output; // output the translated string to page
})

/*
//1
function reverseNumbers() {
  let reverse = reverse()
  document.querySelector(".numberOutput").innerHTML = reverse; // prints the string to the page
}

//2
function palindrom() {
  let reverse = reverse()
  if (input === reverse) { // checks if the values from input and reverse are equal
    document.querySelector(".numberOutput").innerHTML = "True:" + " the numbers you typed in is a palindrom!"; // prints the string to the page
  } else {
    output.innerHTML = "False:" + " the numbers you typed in is not a palindrom."; // prints the string to the page
  }
}

//3 
function uniqueNumbers() {
  let input = everyInput.sort(); // reads global variable containing input value as an array sorts the numbers in the array.
  let unique = true
  for (i = 1; i < input.length; i++) { // loops through the array to see if the values from input are unique
    if (input[i] == input[i - 1]) { // if value matches the previous values they are not uniqe
      unique = false;
      break; // no need to go further
    }
  }
  output.innerHTML = unique + "The numbers are unique" // prints the string to the page
}

//4
function censor() {
  let input = [...everyInput]; // reads global variable containing input value as an array
  for (i = 0; i < 3; i++) {
    input[i] = "*"; // replace the character with *
  }
  document.querySelector(".numberOutput").innerHTML = input.join(""); // prints the string to the page
}

//5 
function addingArrays() {
  let input1 = everyInput; // reads global variable containing input value as an array
  let input2 = everyInput; // a second array with the same value as the first one. Just to have two to add together
  let inputTotal = []; // the array with the new values
  for (i = 0; i < input1.length; i++) { // loops through the two arryas and adds the single numbers together.
    inputTotal[i] = parseInt(input1[i]) + parseInt(input2[i]); // add values with the same index from the two arrays
  }
  document.querySelector(".numberOutput").innerHTML = inputTotal; // prints the string to the page
}

//6
function date() {
  let today = new Date() // fetches information about current date and time with the metod new Date
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] // an array of days for the queryselector to loop through
  document.querySelector(".day").innerHTML = "Today is: " + days[today.getDay()];
}
date(); // run on page load

//7
function language() {
  let input = document.querySelector("#textInput2").value.split("");  // reads the value from the inputfield as a string and turn in in to an array
  let vowles = ["a", "o", "u", "å", "e", "i", "y", "ä", "ö"] // an array of all vowles
  for (i = 0; i < input.length; i++) { // loops through the array to see if the index value is equal to a wovel If it isn't a wovle it will trigger the if-statement
    let c = input[i]; // current characters
    for (j = 0; j < vowles.length; j++) { // loop through each vowel
      if (c == vowles[j]) {
        break; // characters is a vowel, no need to continue this loop
      }
    }
    if (j == 9) { // if character is not a vowel j will equal the lenght of the vowel array, ie, loop ran to the end
      input[i] = c + "o" + c; // append rövarspråkets additional characters to the array item
    }
  }
  document.querySelector(".language").innerHTML = input.join(""); // takes the array, turn it into a string 
}

function language (){
  let ravor = document.querySelector("#textInput2").value.split(""); // read rövarspråket string from page and split into an array per character
  let vowles = ["a", "o", "u", "å", "e", "i", "y", "ä", "ö"]
  let output = ""; // initiate a translated output string
  for (i = 0; i < ravor.length; i++) { // loops through each character in ravor array
    let c = ravor[i]
    for (j = 0; j < vowles.length; j++) {// loops through each vowel
      if (c == vowles[j]) {
        break; // break loop and continue to the following block
      }
    }
    if (j == 9) { // if character is not a vowel j will equal the lenght of the vowel array, ie, loop ran to the end
      i += 2 // jump forward tWo characters in ravor array to skip rövarspråkets character additions
    }
    output += ravor[i] // concatenate current character to the output string
  }
  document.querySelector(".ravor").innerHTML = output; // output the translated string to page
}

*/




























/*---------------------------------------------------------------------------

let total = 0;

let memory = [];

function add(firstNumber, secondNumber) {
  return parseInt(firstNumber) + parseInt(secondNumber);
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;

}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  firstNumber / secondNumber;
}

function getTotal() {
  // Implement me
}

function clearMemory() {
  // Implement me
}

function calculate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      let sum = add(firstNumber, secondNumber);
      // total is in global scope
      //total += sum
      return sum;
    case "-":
      total -= subtract(firstNumber, secondNumber);
      break;
  }
}

function addToTotal(value) {
  total += value;
}

let sum = calculate(5, '+', 5);
addToTotal(sum);

const Calculator = {
  total: 0,
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  addToTotal(value) {
    Calculator.total += value;
  },
  calculate(firstNumber, operator, secondNumber) {
    switch (operator) {
      case "+":
        return firstNumber + secondNumber;
      case "-":
        total -= subtract(firstNumber, secondNumber);
        break;
    }
  }
}

Calculator.add(5, 5);
Calculator.addToTotal(10);
*/