function sum(a,b){
    if (a === null || b === null){
        console.log('error');
    } if ( a === undefined || b === undefined) {
        console.log('error');
    } else {
        return a + b;
    }
    
}
console.log(sum(1,1));

function calculateShoppingBudget(listNeedToBuy){
    let sum = 0;
    for (let i=0 ; i < listNeedToBuy.length ; i = i+1){
        let unit = listNeedToBuy[i][0];
        let price = listNeedToBuy[i][1];
        sum = unit * price + sum;
        debugger;
    }
    return sum;
}

function unitTestCalculateShoppingBudget(expectedResult2,listNeedToBuy){
    if ( calculateShoppingBudget(listNeedToBuy) !== expectedResult2){
        console.log('Test failed' );
    } else {
        console.log('Test passed');
    }
}


expectedResult2 = 110;
listNeedToBuy = [[2,20], [1,30], [4,10]];
console.log(calculateShoppingBudget(listNeedToBuy));
console.log(unitTestCalculateShoppingBudget(expectedResult2,listNeedToBuy));

function snail(list){
    let finalList = [];
    while(list.length){
        debugger;
        finalList.push(...list.shift());
        for (var i=0 ; i < list.length; i++){
            finalList.push(list[i].pop());
        }
        finalList.push(...(list.pop() || []).reverse());
        for (var i= list.length -1 ; i > 0 ; i-- ) {
            finalList.push(list[i].shift());
        }
    
    }
    return finalList

}

function testSnail(list , expectedResult3){
    for ( let i = 0; i < list.length ; i++) {
        if snail(list[i]) !== expectedResult3[i] {
            console.log("Failed");
        } else {
            console.log("Passed");
        }
    }
}

expectedResult3 = [1,2,3,6,9,12,11,10,7,4,5,8];
list = [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]];
console.log(snail(list));
testSnail(expectedResult3,list);