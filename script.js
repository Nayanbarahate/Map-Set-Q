// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

let str = "abcadeecfb";
let res = Array.from(new Set(str)).join("");
console.log(res);
// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

let str1 = "abcadeecfb";
let result = [...str1].reduce(
  (res, char) => ((res[char] = (res[char] || 0) + 1), res),
  {}
);
console.log(result);
