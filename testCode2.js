class A {
    constructor(x,y,z){
        this.x = x
        this.y = y
        const kkk = new Symbol
        this['kkk'] = 100
        this.sum = sum
    }
    sum = function() {
        x + y
    }
}
console.log(sum(1,2))