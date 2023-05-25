// import { radio, button } from "@jashkenas/inputs"
// // start functional programming

// // what is a functional programming
// // --- it is a style of coding which is available in most languages
// // --- a programming paradigm(worldview/mindset)

// //imperative programming - follow my commands do this then

// // declarative programming - this is what i want do it however you want

// // object-oriented programming - keep state to yourself send/receive messages

// // functional programming -
// // one simple idea  



// // what is pure functions -
// // only input in 
// // only output out
// // in  a pure function side effect(connection with outside world except input arguments and output) is not allowed.


// // ==============================================================

// // not pure function

// let name = "Alonzo";

// function greet() {
//     console.log(`Hello, ${name}!`);
// }

// greet(); // Hello Alonzo!

// name = "Alan";
// greet();
// console.clear();

// ///// 
// // Pure function without any side effects

// function greetPure(name) {
//     return `Hello, ${name}!`;
// }

// console.log(greetPure("Alonzo0"));
// greetPure("Allan");





// // Why functional programming
// // more predictable [we know what will be returned after giving arguments]
// // safer
// // easier to test/debug

// // bad reasons X - is the best paradigm but not(it depends on a necessity)
// // X- makes you look smart(not)

// // established community & tools/ libraries / resources /

// // focus of the purity and predictability of the function rather than the length


// // ==========================================

// // side effects

// // 1. do everything with function
// // program === function(s)


// // Imperative 
// let nanny = 'Anode';
// let greetHIm = 'hi';

// console.log(`${greetHIm}, ${nanny}!`);

// greetHIm = 'Howdy';
// console.log(`${greetHIm}, ${nanny}!`);


// // functional:

// function greetHer(greeting, name) {
//     return `${greeting}, ${name}!`;
// }

// console.log(greetHer("heydey", "Emmies"));
// console.log(greetHer("Howdie", "Leila"));


// // ! Avoid side effects
// // do nothing but return output based on nothing but input


// // side effects

// let thesis1 = { name: "Aliener", date: 1936 };

// function renameThesis(newName) {
//     thesis1.name = newName;
//     console.log("renamed");
// }
// renameThesis("CHOKY");


// // without side effects

// const thesis = { name: "sudd", date: 1936 };

// function renameThesis1(oldThesis, newName) {
//     return {
//         name: newName, date: oldThesis.date
//     }
// }

// const thesis2 = renameThesis1(thesis, "bluest");


// // functional should not change the values of the
// // outside world , it should only return . 

// // practice

// evaluate = ƒ(answer, fnName)
// getAnswer = ƒ(fnName)
// pureOrNot = ƒ()


// // -----------------------------------------------------------
// getDate = ƒ()
// function getDate() {
//     return new Date().toDateString();
// }

// // it is not pure
// // why it is not pure cuz new Date() is not an argument, it is from outside world, and next reason is whenever it is called it gives different returning, cuz date changes day by day, to be a function pure, whenever we call it with the same argument, or without changing anything on it, the return value should not be changed
// // A functions is not pure if it's output depends on anything, except its inputs(including the state of the world)m or if calling the function at different times with the same input can give different outputs(e.g. if called on different ways)

// //----------------------------------------------------------
// getWorkshopDate = f();
// function getWorkshopDate() {
//     return new Date(2020, 11, 4).toDateString();
// }

// // it is pure
// // why it is pure, cuz different than new Date() it has fixed value, like any time it will return the same date even though it does not take any arguments
// // A function is pure if it's outPuts depends on nothing but its inputs, and it always return the same output if called with the same inputs(in this case no inputs)

// // -----------------------------------------------------------

// toHex = f(n);

// function toHex(n) {
//     let hex = n.toString(16);
//     return hex.padStart(2, '0');
// }

// // it is pure

// // randomness is side effect
// // -----------------------------------------------------------

// rgbToHex = f(R, G, B);
// function rgbToHex(R, G, B) {
//     return '#' + [toHex(R), toHex(G), toHex(B)].join('');
// }

// // it is pure

// // -----------------------------------------------------------

// setColor = f(R, G, B);
// function setColor(R, G, B) {
//     const hex = rgbToHex(R, G, B);
//     const colorMe = document.getElementById('color-me');
//     colorMe.setAttribute('style', 'color: ' + hex);
// }

// // it is not pure 

// // -----------------------------------------------------------

// writeJsonString = f(object);
// function writeJsonString(object) {
//     return JSON.stringify(object, null, 2);
// }
// // it is pure

// //-----------------------------------------------------------

// exclusiveOr = f(A, B);
// function exclusiveOr(A, B) {
//     return (A || B) && !(A && B);
// }
// // it is pure

// //-----------------------------------------------------------

// computeTruthTable = ƒ(operator);
// function computeTruthTable(operator) {
//     const truthValues = [true, false];
//     const table = [];
//     for (const A of truthValues) {
//         for (const B of truthValues) {
//             const value = operator(A, B);
//             table.push({ A, B, value });
//         }
//     }
//     return table;
// }
// // it is pure

// //-----------------------------------------------------------

// showTruthTable = f(operator);
// function showTruthTable(operator) {
//     console.table(computeTruthTable(operator));
// } // i think why it is not pure is that it does not have return value, so i think

// // it is not pure

// //-----------------------------------------------------------

// // ======================================== //
// ///////// Recursion /////////////////////////
// // ======================================== //

// // staying out of the loop with recursion 



// // Iteration      Recursion

// // imperative     functional
// // looping        self-referential
// // stateful       stateless

// // iteration isn't functional
// // use recursion instead



// // iteration:

// function sum(numbers) {
//     let total = 0;
//     for (i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total;
// }

// sum([0, 1, 2, 3, 4, 5]); // 15


// // recursion:

// function sumR(numbers) {
//     if (numbers.length === 1) {
//         // base case
//         return numbers[0];
//     } else {
//         // recursive case
//         return numbers[0] + sumR(numbers.slice(1));
//     }
// }



// //  higher order functions

// // first-class functions
// // can be passed around as values(like callbacks!)

// // higher-order functions 
// // takes other functions as input/output 

// // remember: don't loop
// // use higher-order functions like map, reduce, filter instead


// // exercises higher order function
// // map will produce a new array



// Concatenate two arrays into a new single array
function concat(array1, array2) {
    return array1.concat(array2);
}


// Return the number of items in an array
function length(array) {
    return array.length;
}

// Return the first item in an array
function head(array) {
    return array[0];
}


// Return the rest of an array after the first item
function tail(array) {
    return array.slice(1);
}


// function filter(predicateFn, array) {
//     if (length(array) === 0) return [];
//     const firstItem = head(array);
//     const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
//     return concat(filteredFirst, filter(predicateFn, tail(array)));
// }

const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function map(fn, array) {
    if (array.length === 0) return [];
    const first = array[0];
    const firstmap = fn(first) ? [fn(first)] : [first];
    return firstmap.concat(map(fn, array.slice(1)));
}

const doubles = map((n) => n * 2, wholes);
const halved = map(n => n / 2, wholes);
console.table({Doubled: doubles, Halved: halved});




/////////////////////////////////////////

            // Closure                                      

/////////////////////////////////////////

// getting closure

// functions can define functions 
    // return the inner function
    // and it will 'remember' scope


    // closure

    function makeAdjectifier(adjective)  {
        return function(noun) {
            return adjective + ' ' + noun;
        };
    }
    const  coolify = makeAdjectifier('cool');
    console.log(coolify('workshop'));
    console.log(coolify('drink'));


    // partial application and currying

    // this lets us 'partially apply' functions 
        // to 'lock in' some arguments and make more reusable functions


    // currying 
        // breaks up a multi-arg function into a series of single-arg ones


    // currying

    function greet(greeting, name) {
        return `${greeting}, ${name}!`;

    }

    function curryGreet(greeting) {
        return function(name) {
            return `${greeting}, ${name}!`;
        }
    };


    const greetItal = curryGreet('Ciao');
    console.log(greetItal('Alonzo')); // "Ciao Alonzo"

    const greetTex = curryGreet('Howdy');
    console.log(greetTex("alonzo"));
    console.log(greetTex("Alan"));


    // basic closure

    function writeMessage(message, salutation, name) {
        return `<p style="padding:3em;font-family:monospace">${message}<br><br>${salutation},<br>${name}</p>`;
        }

writeMessage(
        "You're doing amazing! Hopefully these exercises help you get a bit _closure_ to your programming goals.",
        "Keep _currying_ on",
        "Functional Pungrammer"
    );

    // per signed

    function signMessageFrom (name, salutation) {
        return (message) => writeMessage(message, salutation, name);
    }

    function signMessageWidth(salutation) {
        return (message, name) => writeMessage(message, salutation, name);
    }



    // exercise

    function baho (name) {
        return (subject, grade) => { return name + 's ' + subject + ' is ' + grade };
    }

    console.log(baho('Ulugbek')('Algebra', '3'));


    function fullInfo (number) {
        return name => surname => age => town => graduate => {return number + name + surname + age + town + graduate};

    }


    const v1 = fullInfo(1);
    const v2 = v1(' Ulugbek ');
    const v3 = v2('Norbutaev ');
    const v4 = v3('19 ');
    const v5 = v4('Lodz');
    const v6 = v5( ' Uni Lodz!')

    // or 

    const full = fullInfo(0)(' Ulugbek ')('Norbutaev ')('19 ')('Lodz')( ' Uni Lodz!');
    console.log(full);
    console.log(v6);



    // function composition 

    // it is functions all the way down 
        // program === functions

        // FUNCTION COMPOSITION
        // lets us make complex programs out of simple functions


        // composing functions

        var ender = (ending) => (input) => input + ending;

        var adore = ender(" rocks");
        var announce = ender(", y'all");
        var exclaim = ender("!");

        var hypeUp = x => exclaim(announce(adore(x)));

        console.log(hypeUp('Js'));
        console.log(hypeUp('FP'));


        // immutability


        // Avoid mutability for happier programming
            // on't change in-place instead replace

            // mutation(Dangerous!)

            let cities = ['Delhi', 'Bombay', 'Bangalore'];
            cities[1] = 'Mumbai';
            console.log(cities);

            // not mutation(Safer!)
            const oldCities = ['Delhi', 'Bombay', 'Bangalore'];

            const newCitites = oldCities.map((city) => {
                if (city === 'Bombay') return "Mumbai";
                if (city === "Bangalore") return "Bengaluru";
                return city;
            });
            console.log(oldCities);
            console.log(newCitites);


            // copying data is not very efficient...
            // immutable data structures to the rescue


            // immutable (aka persistent ) data structures
            // use "Structural sharing" to reuse unchanged 



            // we covered 
                // pure functions and avoiding side effects
                // recursions instead of iteration
                // higher order functions
                // closures and composition
                // avoiding data mutation



