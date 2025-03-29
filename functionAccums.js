function accum(s) {
	let result = []
    let count = []
    count = s.split('',s.length)
    for ( let i = 0; i < s.length; i++){
        result.push(count[i].charAt(0).toUpperCase() + count[i].toLowerCase().repeat(i))
    }

    return result.join("-")
}
s = 'HbideVbxncC'
console.log(accum(s))