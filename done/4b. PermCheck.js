// A non-empty array A consisting of N integers is given.
// A permutation is a sequence containing each element from 1 to N once, and only once.
// For example, array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// is a permutation, but array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// is not a permutation, because value 2 is missing.
// The goal is to check whether array A is a permutation.
// Write a function:
// function solution(A);
// that, given an array A, returns 1 if array A is a permutation and 0 if it is not.
// For example, given array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// the function should return 1.
// Given array A such that:
//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// the function should return 0.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..1,000,000,000].



function solution(A) {
  let isPermutation = 0;

  if(A.length == 1) 
    return 1

  if(A.length == 0) 
    return 0

  for(let item = 0; item < A.length; item++) {
    if(!A.includes(A[item], [item + 1])) {
      isPermutation = 1;
    } else {
      isPermutation = 0
      break;
    }
  }

  return isPermutation;
}

console.log('Solution: ', solution([4,1,3,2,8,7,6,66,66]))

