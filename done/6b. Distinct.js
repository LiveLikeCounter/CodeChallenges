// Write a function
// function solution(A);
// that, given an array A consisting of N integers, returns the number of distinct values in array A.
// For example, given array A consisting of six elements such that:
//  A[0] = 2    A[1] = 1    A[2] = 1
//  A[3] = 2    A[4] = 3    A[5] = 1
// the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution(A) {
  return [...new Set(A)].length
}


function uniqueArray() {
  for (var a=[],i=0;i<4000000;++i) a[i]=i;
  return a
}

console.log('Solution 1: ', solution([2, 1, 1, 2, 3, 1, 8, 8]))
console.log('Solution 2: ', solution(uniqueArray()))
console.log('Solution 3: ', solution([...Array(49990)].map(e=>~~(Math.random()*4999))))

