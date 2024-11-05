
function findMax() {
    return Math.max.apply(null, this);
}

let numbers = [1, 5,4,7,10,21,3,9];

// Using call()
let maxCall = findMax.call(numbers);
console.log("Max using call():", maxCall); 

// Using apply()
let maxApply = findMax.apply(numbers);
console.log("Max using apply():", maxApply); 

// Using bind() to create a new function
let boundFindMax = findMax.bind(numbers);
let maxBind = boundFindMax();
console.log("Max using bind():", maxBind); 
