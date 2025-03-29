function countElementInName(Name){
    let count={};
    let arrName = [...Name.toLowerCase()];
    console.log(arrName);
    arrName.forEach(element =>{
        if (count[element]){
            count[element]++;
        } else {
            count[element] = 1;
        }
    });
    return count

}

let Name = 'Lam Anh Khoi';
console.log(countElementInName(Name));