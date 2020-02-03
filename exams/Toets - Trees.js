

function solution(A) {
  let treeToCut = 0;
  let direction;

  for (let tree = 0; tree < A.length - 1; tree++) {
    if (Math.sign(A[tree + 1] - A[tree]) == -1) {
      if (direction == 'down') {
        treeToCut = tree
        break;
      }
      direction = 'down'
    } else if (Math.sign(A[tree + 1] - A[tree]) == 1) {
      if (direction == 'up') {
        treeToCut = tree
        break;
      }
      direction = 'up'
    } else if (Math.sign(A[tree + 1] - A[tree]) == 0) {
      treeToCut = tree
      break;
    }
  }

  return treeToCut
}


console.log('Solution 1: ', solution([5, 2, 3, 3, 2, 6]))
//console.log('Solution 2: ', solution([3,7,4,5]))