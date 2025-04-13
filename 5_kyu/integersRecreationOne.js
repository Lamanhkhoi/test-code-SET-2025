function listSquared(m, n) {
    let result = []
    let sumOfSquaredDivisors = 0
    let secondSumOfSquaredDivisors = 0
    for ( let i = m; i <= n; i++){
        if ( n % i === 0){
            sumOfSquaredDivisors += i*i
            console.log(sumOfSquaredDivisors)
        } else if ( n % i !== 0){}
            for ( let special = 0; special <= i; special++){
                if ( i % special === 0){
                    secondSumOfSquaredDivisors += special * special 
                }
        }
        if (isSquare(sumOfSquaredDivisors)) {
            result.push([i, sumOfSquaredDivisors]);
        } else if (isSquare(secondSumOfSquaredDivisors)) {
            result.push([i, secondSumOfSquaredDivisors]);
        }
    } 
    function isSquare(num) {
        const sqrt = Math.sqrt(num);
        const floorSqrt = Math.floor(sqrt);
        return floorSqrt * floorSqrt === num;
    }  

    return result
}  
m = 1
n = 250
console.log(listSquared(m,n))

// tìm hiểu thêm
function listSquared (m, n) {
    var matches = [];
  
    for (var i = m; i <= n; ++i) {
      var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
      var ok = Number.isInteger(Math.sqrt(sum));
  
      if (ok) {
        matches.push([i, sum]);
      }
    }
  
    return matches;
  }
  
  function getDivisors (n) {
    var divisors = [];
  
    for (var i = 1; i <= n / 2; ++i) {
      if (n % i) { //n % i is the opposite of n % i ==0 
        continue;
      }
      console.log('b',i)
      divisors.push(i);
    }
    console.log('a',[n])
    return divisors.concat([n]);
}