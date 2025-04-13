function rot13(message){
    let result = []
    let char = []
    for ( let i = 0; i < message.length; i++) {
        let decimal = message.charCodeAt(i)
        console.log(decimal)
        if ( decimal >= 0 && decimal <= 32){
            char = String.fromCharCode(decimal)
            result.push(char)
        }  
        if ( decimal >= 33 && decimal <= 47 || decimal >= 58 && decimal <= 64 || decimal >= 91 && decimal <= 96 || decimal >= 123 && decimal <= 126){
            char = String.fromCharCode(decimal)
            result.push(char)
        }
        if ( decimal >= 48 && decimal <= 57){
            char = String.fromCharCode(decimal)
            result.push(char)
        }
        if ( decimal >= 97 && decimal <= 122 ) {
            let newChar = 0
            if ( decimal >= 97 && decimal <= 109 ){
                newChar = decimal + 13
                char = String.fromCharCode(newChar)
                result.push(char)
            } else if ( decimal >109 && decimal <= 122){
                newChar = decimal - 13
                char = String.fromCharCode(newChar)
                result.push(char)
            }
        } else if  ( decimal >= 65 && decimal <= 90 ) {
            if ( decimal >= 65 && decimal <= 77 ){
                newChar = decimal + 13
                char = String.fromCharCode(newChar)
                result.push(char)
            } else if (decimal >77 && decimal <= 90) {
                newChar = decimal - 13
                char = String.fromCharCode(newChar)
                result.push(char)
            }
        }
    } 
    return result.join('')
}
message = 'TYT 9ZMSyTFCIN'
console.log(rot13(message))
