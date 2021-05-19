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
