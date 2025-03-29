function explode(x){
    let result = []
    if (isNaN(x[0]) && isNaN(x[1])) {
        return 'Void!'
    } 
    if ( typeof x[0] === 'number' && typeof x[1] === 'number'){
        let total = x[0]+x[1]
        for ( let i = 0; i < total; i++){
            result.push([...x])
            
        }return result
    }
    if ( typeof x[0] === 'number' ){
        let total = x[0]
        for ( let i = 0; i < total; i++){
            result.push([...x])
            
        }return result
    }
    if (typeof x[1] === 'number'){
        let total = x[1]
        for ( let i = 0; i < total; i++){
            result.push([...x])
            
        }return result
    }
}

x = [3, 'a']
console.log(explode(x))
