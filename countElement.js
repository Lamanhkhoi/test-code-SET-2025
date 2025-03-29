function countElementInName(Name){
    let count={};
    Name.forEach(element =>{
        if (count[element]){
            count[element]++;
        } else {
            count[element] = 1;
        }
    });
    return count

}

let Name = [1, 3, a, b, 3, 6, a];
console.log(countElementInName(Name));