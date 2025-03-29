function countCharacters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}

const word = "hello";
console.log(countCharacters(word));  // Output: 5

