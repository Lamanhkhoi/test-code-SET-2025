function addBinary(a,b) {
    let sum = a + b
    return `${a} + ${b} = ${a+b} in decimal or ${String(sum.toString(2))} in binary`
}
console.log(addBinary(1,1))
//1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)