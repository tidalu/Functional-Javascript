// start functional programming

// what is a functional programming
// --- it is a style of coding which is available in most languages
// --- a programming paradigm(worldview/mindset)

//imperative programming - follow my commands do this then

// declarative programming - this is what i want do it however you want

// object-oriented programming - keep state to yourself send/receive messages

// functional programming -
// one simple idea  



// what is pure functions -
// only input in 
// only output out
// in  a pure function side effect(connection with outside world except input arguments and output) is not allowed.


// ==============================================================

// not pure function

let name = "Alonzo";

function greet() {
    console.log(`Hello, ${name}!`);
}

greet(); // Hello Alonzo!

name = "Alan";
greet();
console.clear();

///// 
// Pure function without any side effects

function greetPure(name) {
    return `Hello, ${name}!`;
}

console.log(greetPure("Alonzo0"));
greetPure("Allan");





// Why functional programming
    // more predictible, safer
    
