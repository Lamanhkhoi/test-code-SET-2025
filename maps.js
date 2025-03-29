function maps(x){
    debugger
    let count=[]
    for ( let i = 0; i < x.length; i++){
      count[i] = x[i] * 2
    }
    return count;
  }
  const x = [1,2,3]
  console.log(maps(x));