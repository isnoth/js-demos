/**
 Before doing the exercise please preview the following links:
 1. http://javascript.ruanyifeng.com/grammar/function.html#
 2. http://javascript.ruanyifeng.com/oop/this.html#toc3
 3. http://es6.ruanyifeng.com/#docs/function -  ES6
 4. https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures
 **/

//#1
//What is hoisting, please explain it and write some examples below
//Your answer:
1.1 变量提升
```
var x = 1;
console.log(x); // 1
if (true) {
    var x = 2;
    console.log(x); // 2
}
console.log(x); // 2
```

1.2. 函数提升
1.2.1 函数声明式 -> 提升
```
function f1() {}
```
1.2.2 函数字面量式 -> 不提升
```
var f2 = function() {}
```

//#2
//What is called IIFE? What is the full name of it? Write an example which is IIFE below:
//Your answer: Immediately-invoked function expression 
(function(){/* code */}());

//#3
//What would be printed out to the console for the snippet of code below?
//Your answer: 15
function doSomething(a) {
    b = a + doSomethingElse( a * 2 );

    console.log( b * 3 );
}

function doSomethingElse(a) {
    return a - 1;
}

var b;

doSomething( 2 );


//#4
//What would be printed out to the console and exaplain why?
//Your answer: opps
//Your reason:
undefined = true; // NOTE: JUST AN EXAMPLE, DON'T DO THIS

(function IIFE( undefined ){

    var a = true;
    if (a === undefined) {
        console.log( "undefined" );
    } else {
        console.log("opps");
    }

})();


//#5
//What would be printed out to the console?
//Your answer:
3
2
//

var a = 2;

(function IIFE( def ){
    def( window );
})(function def( global ){

    var a = 3;
    console.log( a );
    console.log( global.a );
});


//#6
//Given the loop below.
for (let i=0; i<3; i++) {
    console.log( i );
}
//What would be printed out in below line?
console.log( i ); // Your answer: i is not defined


//#7
//What would be printed out to the console?
console.log( a );  //Your answer: undefined
console.log( b ); //Your answer: b is not defined
var a = 2;



//#8
//What would be printed out to the console?
foo();

var foo;

function foo() {
    console.log( 1 );
}

foo = function() {
    console.log( 2 );
};
//Your answer:
1

//#9
//What would be printed to the console?
//answer:  foo is not a function
foo();

var a = true;
if (a) {
    function foo() { console.log( "a" ); }
}
else {
    function foo() { console.log( "b" ); }
}


//#10
//What would be printed out to the console? How many loops will be run?
//answer: infinite loop

function foo() {
    function bar(a) {
        i = 3;
        console.log( a + i );
    }

    for (var i=0; i<10; i++) {
        bar( i * 2 );
    }
}

foo();


//#11
//What would be printed to the console?
//answer: 1
var a = 1;
var x = function () {
    console.log(a);
};

function f() {
    var a = 2;
    x();
}

f()


//#12
//Given the code below:
var a = 1;

function f(p) {
    window[p] = 2;
}
f('a');
//What would be printed out for the a variable?
console.log(a) //your answer: 2



//#13
//Given the code below
var counter = {
    count: 0,
    inc: function () {
        this.count++;
    }
};

var func = counter.inc;
func();
//What would printed out to the console for counter.count?
console.log(counter.count) //your answer:0



//#14
//Given the code below
var slice = Function.prototype.call.bind(Array.prototype.slice);

//What is the result of slice([1, 2, 3], 0, 1) ?
slice([1, 2, 3], 0, 1) //your answer:[1]


//#15
//Given the code below, is the function foo is correctly declared?  If not, why?
function foo(x = 5) {
    let x = 1;
    const y = 2;
}
//Your answer:
no, let can not be assigned twice


//#16
//Given a function below with default values.
function foo({x, y = 5}) {
    console.log(x, y);
}

//What would be printed out to the console for the following invocation?
foo({}) //your answer:undefined 5
foo({x: 1}) //your answer:1 5
foo({x: 1, y: 2}) //your answer: 1 2
foo() //your answer: error


//#17
//Givne a function fetch below:
function fetch(url, { method = 'GET' } = {}) {
    console.log(method);
}

//What would be printed out to the console?
fetch('http://example.com'); //your answer: GET
fetch(); //your answer: GET
fetch('http://example.com', { etag: 'abcdefg'}); //your answer: GET
fetch('http://example.com', { method: 'POST'}); //your answer: POST


//#18
//Given the function below:
function foo(x = 5, y = 6) {
    console.log(x, y);
}
//What would be printed out to the console?
foo(undefined, null); //your answer: 5 null
foo(null, null); //your answer: null null
foo(null, 10); //your answer: null 10



//#19
//Given the code below:
var x = 1;

function f(x, y = x) {
    console.log(y);
}
//What would be printed out to the console?
f(2) //your answer:2


//#20
//Given the code below:
var x = 1;
function foo(x, y = function() { x = 2; }) {
    var x = 3;
    y();
    console.log(x);
}
//What would be printed out to the console?
foo() //your answer: 3
console.log(x) //your answer: 1


//#21
//Given the code  below, what is code for "..." operator?
//your answer for "..." operator
const [first, ...rest] = [1, 2, 3, 4, 5];
//What would be the value for:
first //your answer: 1
rest  //your answer: [2,3,4,5]

//Below code is valid?  If not, why?
//your answer: no , Rest element must be last element in array
const [first, ...middle, last] = [1, 2, 3, 4, 5];



//#22
//Given the code below(NOTE: the str contains 32 bit character):
let str = '<??????>';

function reverseString(s) {
    //your implementation
    return [...s].reverse().join('')
}

//Write a function above to reverse the string.
console.log(reverseString(str)); // ">??????<"



//#23
//Given the code below:
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

var id = 21;

foo.call({ id: 42 });

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    setInterval(() => this.s1++, 1000);
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();
//What would be printed out to the console?
setTimeout(() => console.log('s1: ', timer.s1), 3100); //your answer: 3
setTimeout(() => console.log('s2: ', timer.s2), 3100); //your answer: 0


//#24
//Given the code below
const pipeline = (...funcs) =>
    val => funcs.reduce((a, b) => b(a), val);

const plus1 = a => a + 1;
const mult2 = a => a * 2;
const subst = a => a - 1;
const addThenMult = pipeline(plus1, mult2, subst);

//What would be printed out to the console?
console.log(addThenMult(10));  //your answer:21



//#25
//Given the code below
function foo(str, a) {
    eval( str );
    console.log( a, b );
}

var b = 2;

//What would be printed to the console when invoking foo function below?
foo( "var b = 3;", 1 ); //your answer: 1, 3



//#26
//Given the code below
function foo(obj) {
    with (obj) {
        a = 2;
    }
}

var o1 = {
    a: 3
};

var o2 = {
    b: 3
};

//What would be printed out to the console?
foo( o1 );
console.log( o1.a ); //your answer 2

foo( o2 );
console.log( o2.a ); //your answer undefined
console.log( a ); //your answer 2



//#27
//Given the code below
for (var i=1; i<=5; i++) {
    (function(){
        setTimeout( function timer(){
            console.log( i );
        }, i*1000 );
    })();
}
//What would be printed out to the console?
//Your answer: 6,6,6,6,6



//#28
//Given the code below
var obj = {
    id: "object id",
    cool: function coolFn() {
        console.log( this.id );
    }
};

var id = "global id";


//What would be printed out to the console for following invocation?
obj.cool(); //your answer: 'object id'

setTimeout( obj.cool, 100 ); //your answer: 'global id'




//#29
//Given the code below
//Given the code below
var obj = {
    count: 0,
    cool: function coolFn() {
        if (this.count < 1) {
            setTimeout( () => {
                console.log(this)
                this.count++;
                console.log('timeout!');
            }, 100 );
        }
    }
};

//What would be printed out to the console for obj.count?
obj.cool();
setTimeout( () => { console.log(obj.count); }, 200);  //your answer 1


//What if call the cool function like below, what would be printed out to the console?
var coolFunc = obj.cool;
coolFunc();
setTimeout( () => { console.log(obj.count); }, 200);  //your answer 0

//#30
//Given the code below
var id = 10;
function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var f = foo();

//What would be printed out to the console for the following calls.
var t1 = f.call({id: 5})()(); //your answer: 10
var t2 = f().call({id:5})(); //your answer: 10
var t3 = f()().call({id: 5}); //your answer: 10

//The reason it outputs 10 is because arrow function has no "this" object. To correct it in order to make the output is 5, you should change the "this" for foo function instead of arrow functions:
var f = foo.call({id: 5});
//OR: var f = foo.bind({id:5})();
var t1 = f.call({id: 5})()(); //5
var t2 = f().call({id:5})(); //5
var t3 = f()().call({id: 5}); //5


//#31
//Given the polyfill for .bind method. This polyfill is not the exact same as the native .bind function. Could you find the difference?  
if(!('bind' in Function.prototype)){
  Function.prototype.bind = function(){
    var fn = this;
    var context = arguments[0];
    var args = Array.from(arguments).slice(1);
    return function(){
      return fn.apply(context, args);  
    }
  }
}
