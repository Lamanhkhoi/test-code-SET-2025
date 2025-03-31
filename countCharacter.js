function count(string) {
    let result = {}
    let arrayCharacter = [...string]
    console.log(arrayCharacter)
    arrayCharacter.forEach(element =>{
      if (result[element]){
        result[element]++
        }else{
        result[element] = 1
        }
    })
    return result
  }
string = 'lam anh khoi'
console.log(count(string))