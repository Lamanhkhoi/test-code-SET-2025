function cakes(recipe, available) {
    let result = Infinity
    for ( let ingredient in recipe)
        if (recipe.hasOwnProperty(ingredient)){
            console.log(ingredient)
            console.log(recipe)
            let quantityNeeded = recipe[ingredient]
            console.log(quantityNeeded)
            if (!available.hasOwnProperty(ingredient) || available[ingredient] < quantityNeeded){
                return 0
            }
            let possible = Math.floor( available[ingredient] / quantityNeeded)
            console.log('a',possible)
            result = Math.min( result, possible)
            console.log(result)
        }

    return result
}

const recipe = { flour: 500, sugar: 200, eggs: 1 };
const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available)); // Output: 2