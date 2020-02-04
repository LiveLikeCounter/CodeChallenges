// You are given two non-empty arrays A and B consisting of N integers. Arrays A and B represent N voracious fish in a river, 
// ordered downstream along the flow of the river.

// The fish are numbered from 0 to N − 1. If P and Q are two fish and P < Q, then fish P is initially upstream of fish Q. 
// Initially, each fish has a unique position.

// Fish number P is represented by A[P] and B[P]. Array A contains the sizes of the fish. 
// All its elements are unique. Array B contains the directions of the fish. It contains only 0s and/or 1s, where:

// 0 represents a fish flowing upstream,
// 1 represents a fish flowing downstream.
// If two fish move in opposite directions and there are no other (living) fish between them, 
// they will eventually meet each other. Then only one fish can stay alive − the larger fish eats the smaller one. 
// More precisely, we say that two fish P and Q meet each other when P < Q, B[P] = 1 and B[Q] = 0, 
// and there are no living fish between them. After they meet:

// If A[P] > A[Q] then P eats Q, and P will still be flowing downstream,
// If A[Q] > A[P] then Q eats P, and Q will still be flowing upstream.
// We assume that all the fish are flowing at the same speed. That is, fish moving in the same direction never meet. 
// The goal is to calculate the number of fish that will stay alive.

// For example, consider arrays A and B such that:

//   A[0] = 4    B[0] = 0
//   A[1] = 3    B[1] = 1
//   A[2] = 2    B[2] = 0
//   A[3] = 1    B[3] = 0
//   A[4] = 5    B[4] = 0
// Initially all the fish are alive and all except fish number 1 are moving upstream. 
// Fish number 1 meets fish number 2 and eats it, then it meets fish number 3 and eats it too. 
// Finally, it meets fish number 4 and is eaten by it. The remaining two fish, number 0 and 4, never meet and therefore stay alive.

// Write a function:
// function solution(A, B);
// that, given two non-empty arrays A and B consisting of N integers, returns the number of fish that will stay alive.
// For example, given the arrays shown above, the function should return 2, as explained above.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [0..1,000,000,000];
// each element of array B is an integer that can have one of the following values: 0, 1;
// the elements of A are all distinct.


function solution(A,B) {
  let downStreamFishes = [];
  let upStreamFishes = [];
  let servivedFishes = 0;

  for (let fish = 0; fish < A.length; fish++) {
    // console.log(fish, A[fish], B[fish])
    if (B[fish] === 0) {
      downStreamFishes.push(A[fish])
    } else {
      upStreamFishes.push(A[fish])
    }
  }

  if (upStreamFishes.length === 0) return downStreamFishes.length
  
  const largestFishUpstream = Math.max(...upStreamFishes)

  for (let fish = 0; fish < downStreamFishes.length; fish++) {
    if (largestFishUpstream < downStreamFishes[fish]) {
      console.log(largestFishUpstream, downStreamFishes[fish], '<')
      servivedFishes++
    }
  }

  return servivedFishes > 0 ? servivedFishes : 1
}


console.log('Solution: ', solution([4,3,2,1,5], [0,0,0,0,0]))
// console.log('Solution log unique: ', solution(uniqueArray()))
// console.log('Solution log random: ', solution([...Array(49990)].map(e=>~~(Math.random()*4999))))


function uniqueArray() {
  for (var a = [], i = 0; i < 4000000; ++i) a[i] = i;
  return a
}