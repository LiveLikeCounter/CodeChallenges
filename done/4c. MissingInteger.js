// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
  let smallestPositiveInteger = 1
  A.sort()
  B = [...new Set(A)];

  if (!B.find(value => value > 0)) return smallestPositiveInteger
  if (B.length == 0 || B.length == 1) return smallestPositiveInteger

  C = B.filter((x) => { return x >= 1 });

  for (let i = 1; i <= C.length; i++) {
    if (i - C[i - 1] !== 0) {
      smallestPositiveInteger = i;
      break;
    } else if (i === C.length) {
      smallestPositiveInteger = C.length + 1
    }
  }

  return smallestPositiveInteger;
}

console.log('Solution: ', solution([-1,1,2,3,7]))
