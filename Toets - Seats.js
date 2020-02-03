

function solution(N, S) {
  let totalAvailable = 0;
  const reservedSeats = S.split(' ').sort()
  if (N == 1 && !S.length) return 2;

  for (let row = 1; row < N + 1; row++) {
    let rowAvailable = 2;
    let rowReseverdSeats = reservedSeats.filter((v) => v.startsWith(row))
    for (let seat = 0; seat < rowReseverdSeats.length; seat++) {
      if(rowReseverdSeats[seat] == (row + 'B') || rowReseverdSeats[seat] == (row + 'C') || rowReseverdSeats[seat] == (row + 'D') || rowReseverdSeats[seat] == (row + 'E')) {
        rowAvailable--;
      }
      if(rowReseverdSeats[seat] == (row + 'F') || rowReseverdSeats[seat] == (row + 'G') || rowReseverdSeats[seat] == (row + 'H') || rowReseverdSeats[seat] == (row + 'J')) {
        rowAvailable--;
      }
    }
    totalAvailable += rowAvailable
  }

  return totalAvailable;
}


console.log('Solution: ', solution(88, "1A 2F 1C 8G 8C"))