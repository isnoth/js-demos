var v1 = 'abc';
var v2 = true;
var v3 = 10;

var obj = Object.assign({}, v1, v2, v3);
//What is the result of the obj?
console.log(obj); // your answer: {0: 'a', 1:'b', 2: 'c'}

//Also what's the returned result for below statement?
console.log(Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' })); // your answer:
var d = {[Symbol('c')]:'d'}
console.log(d)
