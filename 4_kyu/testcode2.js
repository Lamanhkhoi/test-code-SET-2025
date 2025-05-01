function test(arr){
console.log(arr.filter(n => 1)); // [1, 2, 3, 4]
console.log(arr.filter(n => true)); // [0, 1, 2, 3, null, undefined, "", 4]
}
arr = [0, 1, 2, 3, null, undefined, "", 4];
console.log(test(arr))