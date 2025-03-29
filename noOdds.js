function noOdds( values ){
    let result = []
    for ( let i = 0; i< values.length; i++){
      if ( values[i] % 2 === 0 ){
        result.push(values[i])
      }
    }return result
}
values = [0,1,2,3,4,5]
console.log(noOdds(values))
/* push. là thêm vào mảng còn 
result[i] = values[i] là mình đang gáng cái giá trị đó vào cái địa chỉ của cái mảng nên nó có empty item */