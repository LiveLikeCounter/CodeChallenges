// A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.

// Write a function:

// function solution(S);
// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", 
// the function should return 0, as explained above.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..200,000];
// string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".




function solution(A) {
  let result = 0, charOpen = 0, charClose = 0, charSum = 0;
  const arrayLength = A.length;

  // [ = 91   ] = 93
  // { = 123  } = 125
  // ( = 40   ) = 41
  console.log(A.charCodeAt())
  if (typeof A == 'undefined' || arrayLength == 0 || arrayLength == null) return result;
  if (A.charAt(0).charCodeAt() == 93) return result;
  if (A.charAt(0).charCodeAt() == 125) return result;
  if (A.charAt(0).charCodeAt() == 41) return result;
  if (arrayLength % 2 !== 0) return result;
  if (A.charAt(arrayLength - 1).charCodeAt() !== 41) return result;


  return
}

function solution(S) {
  var brackets = {
      "{": "}",
      "(": ")",
      "[": "]"
  }

  var closedBrackets = ["}", ")", "]"]
  
  var stack = [];
  
  for (var i =0; i < S.length; i++) {
      if (brackets.hasOwnProperty(S[i])) {
          stack.push(S[i])
      } else if (brackets[stack[stack.length -1]] == S[i]) {
          stack.pop()
      } else if (closedBrackets.indexOf(S[i]) !== -1) {
        return 0
      }
  }
  
  return stack.length === 0 ? 1 : 0
}



console.log('Solution 1: ', solution(')'))
//console.log('Solution 1: ', solution('{[()()]}'))
//console.log('Solution 2: ', solution('([)()]'))
