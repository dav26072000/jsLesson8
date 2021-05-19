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
