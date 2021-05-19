// Task 1
// 1.Try to reverse string s using the split,reverse, and join methods.
// 2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
// 3.0 Print s on new line. If no exception was thrown, then this should be the reversed string, if an exception
// was thrown, this should be the original string.

function checkStr(str) {
  try {
    str = str.split("").reverse().join("");
  } catch (error) {
    console.log(error.message);
  }
  return str;
}

// Task 2
// Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
// return the string YES. Otherwise, it must throw an Error according to the following rules:
// 1. If a is 0, throw an Error with message = Zero Error.
// 2. If a is negative, throw an Error with message = Negative Error.

function isPositive(num) {
  try {
    if (num === 0) {
      throw new Error("Zero Error");
    }
  } catch (error) {
    return error.message;
  }
  try {
    if (num % 2 === 1) {
      throw new Error("Negative Error");
    }
  } catch (error) {
    return error.message;
  }
  return num;
}

// Task 3
// Convert the code using try...catch.

// function reverseString(s) {
// typeof s !== "string"
// ? console.log("s.split is not a function")
// : (s = s.split("").reverse().join(""));
// console.log(s);
// }

function reverseString(s) {
  try {
    if (typeof s !== "string") {
      throw new Error("s.split is not a function");
    }
  } catch (error) {
    return error.message;
  }
  s = s.split("").reverse().join("");
  return s;
}

// Task 4
// A teacher has created a gradeLabs function that verifies if student programming labs work. This function
// loops over an array of JavaScript objects that should contain a student property and runLab property. The
// runLab property is expected to be a function containing the student's code. The runLab function is called
// and the result is compared to the expected result. If the result and expected results don't match, then the lab is
// considered a failure.
//       +gradeLabs
// The gradeLabs function works for the majority of cases. However, what happens if a student named their
// function incorrectly? Run gradeLabs and pass it studentLabs2 as defined below.

function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];
    let result;
    try {
      result = lab.runLab(3);
    } catch (error) {
      return error.message;
    }
    console.log(`${lab.student} code worked: ${result === 27}`);
  }
}
let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

let studentLabs = [
  {
    student: "Carly",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Erica",
    runLab: function (num) {
      return num * num;
    },
  },
];

console.log(gradeLabs(studentLabs2));
