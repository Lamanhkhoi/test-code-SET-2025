//trên này thiếu trường hợp khoảng trống
function validatePIN (pin) {
    if ( pin.length !== 4 && pin.length !== 6){
        return false
    }
    for ( let i = 0; i< pin.length; i++ ){
        if (isNaN(pin[i])){
            return false
        }
    }
    return true
}
pin = '123a'
console.log(validatePIN(pin))
function validatePIN (pin) {
    //return true or false
    var n = pin.length;
    if( n != 4 && n != 6)
        return false;
    for (var i in pin)
        if (pin[i] > '9' || pin[i] < '0')
            return false;
    return true;
}
