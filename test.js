// iterative

function iterativeFibonacci(n) {
    // TODO your code goes here
    let m = 0;
    let m1 = 1;
    let returnVal = 0;
    for (let i = 1; i < n; i++) {
        returnVal = m + m1;
        m = m1;
        m1 = returnVal;
    }
    return returnVal;
}
console.log(iterativeFibonacci(104));



// recursive 
function recursiveFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return (recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2));
}

// console.log(recursiveFibonacci(50));


// tail recursive
function tailRecursiveFibonacci(n, a = 0, b = 1) {
    if (n === 0) return a;
    if (n === 1) return b;
    return tailRecursiveFibonacci(n - 1, b, a + b);
}

console.log(tailRecursiveFibonacci(104));

