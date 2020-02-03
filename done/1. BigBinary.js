

function solution(N) {
  let indexOfOneArray = []
  let newArray = []
  let binaryNum = N.toString()
  let numOne = null
  let binaryGap = null

  for(let i = 0; i < binaryNum.length; i++) {
    if(newArray.indexOf(binaryNum.indexOf(1,i)) === -1) {
      newArray = [...newArray,binaryNum.indexOf(1,i)]
    }
  }

  for(let i = 0; i < newArray.length - 1; i++) {
    numOne = newArray[i];
    if(binaryGap < newArray[i + 1] - (numOne + 1)) {
      binaryGap = newArray[i + 1] - (numOne + 1)
    }
  }

  if(binaryGap === null) {
    return 0
  } else {
    return binaryGap
  }


}