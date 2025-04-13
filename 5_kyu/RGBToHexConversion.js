function rgb(r, g, b) {
    const toHex = function toHex(c){
        let hex = ''
        if ( c < 0){
            return "00"
        }else if(c > 255){
            return "FF"
        }
        hex = c.toString(16)
        if( hex.length === 1){
            hex = "0" + hex
        }
        return hex
    }
    let rHex = toHex(r)
    let gHex = toHex(g)
    let bHex = toHex(b)
    return (rHex + gHex + bHex).toUpperCase();
}
r = 173
g = 255
b = -154
console.log(rgb(r,g,b))

// function rgb(r, g, b){
// 	return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }