/**
Please preview the following references before doing the excercise below:
1.  http://es6.ruanyifeng.com/#docs/let
2.  http://es6.ruanyifeng.com/#docs/destructuring
3.  http://es6.ruanyifeng.com/#docs/string
4.  http://es6.ruanyifeng.com/#docs/object
5.  http://es6.ruanyifeng.com/#docs/symbol
6.  http://es6.ruanyifeng.com/#docs/set-map
*/


//#1
//Will the loop be infinity loop? And why?
for (let i = 0; i < 3; i++) {
  let i = 2;
  console.log(i);
}
//Your answer: 2 2 2



//#2
//What would be printed out to the console? 
console.log(typeof x); 
let x;
//Your answer: x is not defined



//#3
//Given the function declaration below, is it a valid function declaration? If not, Why?
function func(arg) {
  let arg;
}
//Your answer: not duplicate declare of arg



//#4
//Is it valid to declare two variables by using the same name "insane". 
{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}
}}}};
//Your answer:Yes


//#5?
//Given the snippet of code, what would be printed to the console? 
//Your answer: f is not a function
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    function f() { console.log('I am inside!'); }
  }

  f();
}());



//#6
//What would be printed to the console? 
var a = 1;
let b = 2;
const c = 2;
console.log(window.a); //your answer:1
console.log(window.b); //your answer:undefined
console.log(window.c); //your answer:undefined



//#7
//What's the value for x, y and z? 
let [x, y, ...z] = ['a'];
x // your answer:a
y // your answer:undefined
z // your answer:[]




//#8?
//Given the code below, will the console print 'aaa'? and why?
function f() {
  console.log('aaa');
}

let [x = f()] = [1];
//your answer:no



//#9
//Given the code below, what would be printed to the console? 
let { foo: baz } = { foo: "aaa", bar: "bbb" };
console.log(baz) // your answer: aaa
console.log(foo) // your answer: foo is not defined



//#10
//Given two variables foo and bar, and also given a object fooBarObj below:
let foo;
let bar;
let fooBazObj = {foo: 1, baz: 2};
//Please assign the foo variable for foo property and bar for baz property by using destructuring assignment.
//put your implementatin below: let {foo, bar} = fooBazObj


//#11
//Given an object obj, please utilize destructuring assignment and template string to output a string 
//"Hello World!"
//"I am Jonathan."  let {p: [x0, {y}], q:{x, z:[z0, z1]}} = obj
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ],
  q: { x: 'I', z: [ 'am', 'Jonathan'] }
};
//Write your implementation below:



//#12????
//Given the code below, what would be the value for the x after destructuring assignment?
let x;
{x} = {x: 1};
//your answer? 1


//#13
//Given an array, please write a function to sum up all numbers(result is 10). 
//DO NOT use extra variables and loops. 
let numbers = [[1, 2], [3, 4]];
function sumUp(data) {
  //write your implementation here:
  let [[...a], [...b]] = data
  return [...a, ...b].reduce((a, b)=>(a+b ))
}
console.log(sumUp(numbers)); // 10 



//#14
//given a string below 
var s = '??????a';

//The result is true or false? 
s.codePointAt(0) ===  '??????'.codePointAt(0); //answer: true
s.codePointAt(1) === 'a'.charCodeAt(0);  //answer: false

//How to convert the code point of '??????' to the hexadecimal?
//write your implementation below:


//Given the loop below to loop the string. What would be printed to the console?
for (let i = 0; i < s.length; i++) {
  console.log(s[i]);
}
//Your answer:


//#15
//Given the code below, what are the results for the statement below?
'12'.padStart(10, 'YYYY-MM-DD');  // your answer: YYYY-MM-12
'09-12'.padStart(10, 'YYYY-MM-DD') // your answer: YYYY-09-12
'xxx'.padStart(2, 'ab') // your answer: xxx
'x'.padEnd(4) // your answer: 'x   '



//#16
//Given the code below, what would be printed to the console? 
function fn() {
  return "Hello World";
}

console.log(`foo ${fn()} bar`); //your answer:foo Hello World bar
console.log`foo ${fn()} bar`; // your answer: ['foo', 'bar'] "hello world"


//#17
//Given the data below
const data = [
    { first: '<Jane>', middle: 'Hebe', last: 'Bond' },
    { first: 'Lars', middle: 'Zack', last: '<Croft>' },
];
//Please write a function to generate a HTML table(hint: use template string)

function tableTmpl(data) {
  //write your implementation here:
  return ` <table>
    ${data.map(people=>(`<tr>
      <td>${people.first}</td>
      <td>${people.middle}</td>
      <td>${people.last}</td>
    </tr>`)).join('')}
  </table>
  `
}

console.log(tableTmpl(data));
//the output looks like:
// <table>
//   <tbody>
//    <tr>
//       <td><Jane></td>
//       <td>Hebe</td>
//       <td>Bond</td>
//    </tr>
//    <tr>
//       <td>Lars</td>
//       <td>Zack</td>
//       <td><Croft></td>
//    </tr>
//   </tbody>
// </table>




//#18
//Given the code below
const keyA = {a: 1};
const keyB = {b: 2};
const myObject = {
  method() {
    return "Hello!";
  },
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};

//What is myObject, please write this object in literally in ES5 below 
myObject  // your answer:
{
  method: function(){
    return "Hello!"
  },
  [object Object]:'valueB'
}


//#19?
//What's the result of the comparision below?
+0 === -0 //your answer: true
NaN === NaN //your answer: false



//#20
//Given the code below
var target = { a: 1, b: 1 };

var source1 = { b: 2, c: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
// What is the result of this target?
target // your answer: {a: 1, b:2, c:3}

//What's the result of the comparision below?
Object.assign(target, undefined) === target //your answer: true
Object.assign(target, null) === target //your answer: true



//#21
//Given code below:
var v1 = 'abc';
var v2 = true;
var v3 = 10;

var obj = Object.assign({}, v1, v2, v3);
//What is the result of the obj?
console.log(obj); // your answer:

//Also what's the returned result for below statement?
Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' }); // your answer: {a: 'b'}



//#22
//What is the return result for this invocation? 
Object.assign([1, 2, 3], [4, 5]); // your answer: [4,5,3]



//#23?
var s1 = Symbol();
var s2 = Symbol();

//What's the result of this comparision?
s1 === s2 // your answer: false

var s1 = Symbol('foo');
var s2 = Symbol('foo');

//What's the result of this comparision?
s1 === s2 // your answer: false



//#24
//Given the code below:
var mySymbol = Symbol();
var a = {};

a.mySymbol = 'Hello!';
//What's the result?
a[mySymbol] // your answer: undefined



//#25
//Givn an array below including duplicated values
var duplicatedArray = [1,2,3,3,2,5,6,7,1];
//Write a function to return a new Array which contains no duplicated value: [1,2,3,5,6,7]
function removeDuplciatedValues(data) {
  //write your implementation here
  return [...new Set(array)]
}


//#26
//What is "Same-value equality" algorithm. 
//Your answer:
//1. similiar to (===) but NaN !== NaN


//#26
//Given a set
let set = new Set();

set.add({});
set.add({});
//What is size of the set then?
set.size //your answer:2



//#27
//Given two sets
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

//Write a function to union two sets(�??��). 
function unionSets(s1, s2) {
  //your implementation
  return new Set([...s1, ...s2])
}
//the result of unionSets(a, b) is {1, 2, 3, 4}

//Write a function to intersect two sets(����)
function intersectSets(s1, s2) {
  //your implementation
  return new Set([...s1].filter(x=>s2.has(x)))
}
//the result of intersectSets(a, b) is {2, 3}

//Write a function to diff two sets(�) 
function diffSets(s1, s2) {
  //your implementation
  return new Set([...s1].filter(x=>!s2.has(x)))
}
//the result of diffSets(a, b) is {1}


//#28
var ws = new WeakSet();
//What's the size of ws?
ws.size //your answer: undefined



//#29
const map = new Map();
map.set(['a'], 555);
//What's the result below?
map.get(['a']) //your answer: undefined
map.set(-0, 123);
map.get(+0) //your answer:123

map.set(true, 1);
map.set('true', 2);
map.get(true) //your answer:1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) //your answer:3

map.set(NaN, 123);
map.get(NaN) //your answer:123




//#30 ����!
//Write a function to convert an object to a Map. 
function objToStrMap(obj) {
  //your implementation
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({yes: true, no: false}) // Map {"yes" => true, "no" => false}



//#31
const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
obj = null;
//What's the result of wm.get(key)? 
wm.get(key) // your answer: {foo:1}
