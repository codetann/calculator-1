const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function (input) {
  let tokens = input.split(" ");

  let mathSymbol = tokens[0];
  let num1 = Number(tokens[1]);
  let num2 = Number(tokens[2]);

  if (mathSymbol === "+") {
    console.log(num1 + num2);
  } else if (mathSymbol === "-") {
    console.log(num1 - num2);
  } else if (mathSymbol === "*") {
    console.log(num1 * num2);
  } else if (mathSymbol === "/") {
    console.log(num1 / num2);
  } else {
    console.log(Math.sqrt(num1 + num2));
  }

  // This line closes the connection to the command line interface.
  reader.close();
});
