const { sum, subtract, multiply, division } = require("./operations");
const readline = require("readline");
const { exit } = require("process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveMenu = function () {
  rl.question(
    `Choose your operation:
1. +
2. -
3. *
4. /
5. exit
`,
    (operation) => {
      if (operation < 1 || operation > 5) {
        console.log("Wrong option");
        recursiveMenu();
      } else if (operation == 5) {
        exit();
      }

      rl.question("Enter first number: ", (x) => {
        rl.question("Enter second number: ", (y) => {
          x = parseInt(x, 10);
          y = parseInt(y, 10);

          switch (operation) {
            case "1":
              console.log(sum(x, y));
              break;
            case "2":
              console.log(subtract(x, y));
              break;
            case "3":
              console.log(multiply(x, y));
              break;
            case "4":
              console.log(division(x, y));
              break;
          }
          rl.close();
        });
      });
    }
  );
};

recursiveMenu();
