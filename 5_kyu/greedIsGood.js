// use if/else
/*function score( dice ) {
    let result = 0
    let faceOfDice = {}
    for ( let face of dice){
        faceOfDice[face] = (faceOfDice[face] || 0) + 1
        console.log(faceOfDice)
        console.log(face)
    }
    for ( let face in faceOfDice ){
        if ( faceOfDice[face] >= 3 ){
            console.log(faceOfDice[face])
            let count = faceOfDice[face]
            if ( face === '1'){
                result += 1000
                count -= 3
                result += count * 100
            } else if ( face === '6'){
                result += 600
            } else if ( face === '5'){
                result += 500
                count -= 3
                result += count * 50
            } else if ( face === '4'){
                result += 400
            } else if ( face === '3'){
                result += 300
            } else if ( face === '2'){
                result += 200
            }
        } else if ( faceOfDice[face] === 1 ){
            if ( face === '1'){
                result += 100
            } else if ( face === '5'){
                result += 50
            }
        } else if ( faceOfDice[face] === 2 ){
            if ( face === '1'){
                result += 200
            } else if ( face === '5'){
                result += 100
            }
        }
    }
    return result
}*/


// use switch case
/*function score( dice ) {
    let result = 0
    let faceOfDice = {}
    for ( let face of dice){
        faceOfDice[face] = (faceOfDice[face] || 0) + 1
        console.log(faceOfDice)
        console.log(face)
    }
    for (let face in faceOfDice) {
    let count = faceOfDice[face];
    switch (face) {
        case '1':
            if (count >= 3) {
                result += 1000;
                counts[face] -= 3;
                result += faceOfDice[face] * 100;
            } else {
                result += count * 100;
            }
            break;
        case '2':
            if (count >= 3) {
                result += 200;
                faceOfDice[face] -= 3;
            }
            break;
        case '3':
            if (count >= 3) {
                result += 300;
                faceOfDice[face] -= 3;
            }
            break;
        case '4':
            if (count >= 3){
                result += 400
                faceOfDice[face] -= 3
            }
            break
        case '5':
            if (count >= 3) {
                result += 500;
                faceOfDice[face] -= 3;
                result += faceOfDice[face] * 50;
            } else {
                result += count * 50;
            }
            break;
    }
    }
    return result
}*/

// use double object
function score( dice ) {
    let result = 0
    let faceOfDice = {}
    for ( let face of dice){
        faceOfDice[face] = (faceOfDice[face] || 0) + 1
    }
    let threeOfAKindPoint = {
        '1' : 1000,
        '2' : 200,
        '3' : 300,
        '4' : 400,
        '5' : 500,
        '6' : 600,
    }
    for ( let face in faceOfDice){
        count = faceOfDice[face]
        if ( count >= 3){
            result += threeOfAKindPoint[face] || 0
            faceOfDice[face] -= 3
        }
        if ( faceOfDice[face] === 1 && face === '1'){
            result += 100
        } else if ( faceOfDice[face] === 1 && face === '5' ){
            result += 50
        }
    }
    return result
}
dice = [5,1,1,1,2]
console.log(score(dice))