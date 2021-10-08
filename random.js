// Collect input from a user
let inputLow = prompt ("Enter you minimum number: ");
let inputHigh = prompt ("Enter you maximum number: ");


const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);
const main = document.querySelector ('main');
// Check if lowNumber OR highNumber is not a number


if ( isNaN(lowNumber) || isNaN(highNumber) ) {
  main.innerHTML = ` <h1> You need to provide a <strong> number </strong>. Try again! </h1> ` ;
} else {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor( Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;

  // Create a message displaying the random number
   main.innerHTML = ` <h1> ${randomNumber} is a random number between ${lowNumber} and ${highNumber}. </h1> ` ;
}
