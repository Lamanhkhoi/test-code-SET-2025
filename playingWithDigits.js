function digPow(n, p) {
    let result = 0
    let count = []
    let array = n.toString()
    count = array.split('')
    console.log(count)
    for ( let i = 0; i < count.length; i++) {
        result += parseInt(count[i])**(p+i)
    }
    let k = 0
    if ( result % n !== 0 ) {
        return -1
    } else {
        return k = result / n
    }
    
}
n = 46288
p = 3
console.log(digPow(n,p))
