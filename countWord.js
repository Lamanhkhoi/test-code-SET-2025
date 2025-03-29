function addLength(str) {
    let result = []
    let count = []  
    count = str.split(' ', str.length)
    console.log(count)
    for ( let i = 0; i < count.length; i++){
        result.push(count[i] + ' ' + count[i].length)
    }
    return result
}
let str = 'lam anh khoi'
console.log(addLength(str))



/*const str1 = 'The quick brown fox jumps over the lazy dog.';

const words = str1.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str1.split('');
for ( let i = 0; i< chars.length; i++){
  console.log(chars[i]);
}

// Expected output: "k"

const strCopy = str1.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]*/