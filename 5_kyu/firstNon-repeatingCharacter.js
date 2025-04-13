function firstNonRepeatingLetter(s) {
    let lowerString = s.toLowerCase()
    let charCount = {}
    for ( let char of lowerString){
        charCount[char] = (charCount[char] || 0) + 1
        console.log(charCount)
    }
    for ( const char of s){
        let lowerChar = char.toLowerCase()
        console.log(lowerChar)
        if ( charCount[lowerChar] === 1){
            return char
        }
    }
    return ''
}
s = 'Go, hang a salami lasagna hog!'
console.log(firstNonRepeatingLetter(s))