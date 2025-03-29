function check(a,x) {
    debugger
    let result = false
    for ( let i = 0; i < a.length; i++){
      if ( a[i] === x ){
       result = true
      }
    }return result
  }
  let a = [12, 23, 106, 99]
  let x = 106
  console.log(check(a,x))