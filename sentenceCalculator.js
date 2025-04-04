function lettersToNumbers(s) {
    let result = 0
    for ( let char of s ){
        if( char >= 'a' && char <= 'z'){
            result += char.charCodeAt(0) - 96
        } else if ( char >= 'A' && char <= 'Z'){
            result += (char.charCodeAt(0) - 64) * 2
        } else if ( char >= '0' && char <= '9'){
            result += parseInt(char)
        }
    }
    return result
}
s = "aA1"
console.log(lettersToNumbers(s))