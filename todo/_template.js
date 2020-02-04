

function solution(A) {

  return
}


console.log('Solution: ', solution([1, 2, 3]))
// console.log('Solution log unique: ', solution(uniqueArray()))
// console.log('Solution log random: ', solution([...Array(49990)].map(e=>~~(Math.random()*4999))))


function uniqueArray() {
  for (var a = [], i = 0; i < 4000000; ++i) a[i] = i;
  return a
}