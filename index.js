import {radio, button} from "@jashkenas/inputs"
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
// more predictable [we know what will be returned after giving arguments]
// safer
// easier to test/debug

// bad reasons X - is the best paradigm but not(it depends on a necessity)
// X- makes you look smart(not)

// established community & tools/ libraries / resources /

// focus of the purity and predictability of the function rather than the length


// ==========================================

// side effects

// 1. do everything with function
// program === function(s)


// Imperative 
let nanny = 'Anode';
let greetHIm = 'hi';

console.log(`${greetHIm}, ${nanny}!`);

greetHIm = 'Howdy';
console.log(`${greetHIm}, ${nanny}!`);


// functional:

function greetHer(greeting, name) {
    return `${greeting}, ${name}!`;
}

console.log(greetHer("heydey", "Emmies"));
console.log(greetHer("Howdie", "Leila"));


// ! Avoid side effects
// do nothing but return output based on nothing but input


// side effects

let thesis1 = { name: "Aliener", date: 1936 };

function renameThesis(newName) {
    thesis1.name = newName;
    console.log("renamed");
}
renameThesis("CHOKY");


// without side effects

const thesis = { name: "sudd", date: 1936 };

function renameThesis1(oldThesis, newName) {
    return {
        name: newName, date: oldThesis.date
    }
}

const thesis2 = renameThesis1(thesis, "bluest");


// functional should not change the values of the
// outside world , it should only return . 

// practice

evaluate = ƒ(answer, fnName)
getAnswer = ƒ(fnName)
pureOrNot = ƒ()


// -----------------------------------------------------------
getDate = ƒ()
function getDate() {
    return new Date().toDateString();
}

// it is not pure
// A functions is not pure if it's output depends on anything, except its inputs(including the state of the world)m or if calling the function at different times with the same input can give different outputs(e.g. if called on different ways)

//----------------------------------------------------------
getWorkshopDate = f();
function getWorkshopDate() {
    return new Date(2020, 11, 4).toDateString();
}

// it is pure
// A function is pure if it's outPuts depends on nothing but its inputs, and it always return the same output if called with the same inputs(in this case no inputs)

// -----------------------------------------------------------

toHex = f(n);

function toHex(n) {
    let hex = n.toString(16);
    return hex.padStart(2, '0');
}

// it is pure

// -----------------------------------------------------------

rgbToHex = f(R, G, B);
function rgbToHex(R, G, B) {
    return '#' + [toHex(R), toHex(G), toHex(B)].join('');
}

// it is pure

// -----------------------------------------------------------

setColor = f(R, G, B);
function setColor(R, G, B) {
    const hex = rgbToHex(R, G, B);
    const colorMe = document.getElementById('color-me');
    colorMe.setAttribute('style', 'color: ' + hex);
}

// it is not pure 

// -----------------------------------------------------------

writeJsonString = f(object);
function writeJsonString(object) {
    return JSON.stringify(object, null, 2);
}
// it is pure

//-----------------------------------------------------------

exclusiveOr = f(A, B);
function exclusiveOr(A, B) {
    return (A || B) && !(A && B);
}
// it is pure

//-----------------------------------------------------------

computeTruthTable = ƒ(operator);
function computeTruthTable(operator) {
    const truthValues = [true, false];
    const table = [];
    for (const A of truthValues) {
        for (const B of truthValues) {
            const value = operator(A, B);
            table.push({ A, B, value });
        }
    }
    return table;
}
// it is pure

//-----------------------------------------------------------

showTruthTable = f(operator);
function showTruthTable(operator) {
    console.table(computeTruthTable(operator));
} // i think why it is not pure is that it does not have return value, so i think

// it is not pure

//-----------------------------------------------------------
