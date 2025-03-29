function findUniq(arr) {
    result = {}
    for ( let values of arr ){
        result[values] = (result[values] || 0)+1
    }
    for ( let key in result){
        if ( result[key] === 1 ){
            console.log(typeof result[key])
            result = Number(key)
            console.log(typeof result)
        }
    }
    return result
}
arr = [1,1,1,1,1,1,2,1,1,1,1]
console.log(findUniq(arr))