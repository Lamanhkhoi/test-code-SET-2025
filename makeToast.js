function sixToast(num) {
    let result = 0
    if ( num === 6){
        return result
    } else if ( num < 6){
        result = 6 - num
        return result
    } else if ( num > 6){
        result = num - 6
        return result
    }
}
num = 65
console.log(sixToast(num))