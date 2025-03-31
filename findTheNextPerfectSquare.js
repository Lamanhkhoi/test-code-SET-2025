function findNextSquare(sq) {
    let square = Math.sqrt(sq)
    if ( square % 1 === 0){
      square++
      return square * square
    }
    return -1;
}