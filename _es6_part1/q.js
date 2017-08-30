var l = console.log

const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
obj = null;
//What's the result of wm.get(key)? 
l(wm.get(key)) // your answer:

