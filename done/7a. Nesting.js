// A string S consisting of N characters is called properly nested if:

// S is empty;
// S has the form "(U)" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, string "(()(())())" is properly nested but string "())" isn't.

// Write a function:
// function solution(S);

// that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.
// For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..1,000,000];
// string S consists only of the characters "(" and/or ")".




function solution(A) {
  let result = 0, charOpen = 0, charClose = 0, charSum = 0;
  const arrayLength = A.length;

  if (typeof A == 'undefined' || arrayLength == 0 || arrayLength == null) return result;
  if (A.charAt(0).charCodeAt() == 41) return result;
  if (arrayLength % 2 !== 0) return result;
  if (A.charAt(arrayLength - 1).charCodeAt() !== 41) return result;

  for (let char = 0; char < arrayLength; char++) {
    if (!(A[char].charCodeAt() == 40 || A[char].charCodeAt() == 41)) break;
    if (A[char].charCodeAt() == 40) {
      charSum++
      charOpen++
    } else {
      charSum--
      charClose++
    }
  }

  if (charOpen === charClose) result = 1
  if (charSum === 0) result = 1

  return result
}


console.log('Solution 1: ', solution('(()(())())'))
console.log('Solution 2: ', solution('())'))