/**
 * Please preview the following links carefully before doing the exercises below.
 * http://es6.ruanyifeng.com/#docs/promise
 * https://ponyfoo.com/articles/es6-promises-in-depth
 * https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch3.md
 *
 */


//#1
//What is Promise. Try to describe it in a short sentence. 

//#2
//How many states a Promise object possibly has? 
//pending
//fulfilled
//rejected

//#3
//Is it possible to cancel a Promise? 
//NO, once a promise is ongoging, you cannot cancel it. 

//#4
//What would be printed out?
const promise = new Promise((resolve, reject) => {
   console.log('New Promise');
   resolve();
});

promise.then(() => console.log('Resolved')).then(() => console.log('Resolved-1'));
promise.then(() => console.log('Resolved-2'));
console.log('Hello');
//Your answer:
//New Promise
//Hello
//Resolved
//Resolved-2
//Resolved-1

//#5 
//What would be printed out?
setTimeout(() => console.log('1'), 0);
const p1 = new Promise((resolve, reject) => {
  console.log('2');
  resolve();
});

p1.then(() => console.log('3')).then(() => console.log('4'));
p1.then(() => setTimeout(() => console.log('5'), 0)).then(() => console.log('6'));
console.log('7');
//Your answer:
//2
//7
//3
//4
//6
//1
//5

//#6 ?
//What would be printed out?
const p2 = new Promise((resolve, reject) => {
  console.log('1');
  reject();
  resolve();
});

p2.then(() => console.log('2'), () => console.log('3')).catch(() => console.log('4')).then(() => console.log('5'));
//Your answer:
//1
//3
//5

//#7
//What would be printed out?
const p3 = new Promise((resolve, reject) => {
  resolve(x + 2);
});

p3.catch(() => console.log('2')).then(() => console.log('3'));
//Your answer:
//2
//3

//#8
//What would be printed out?
const thenable = {
  then() {
    return 'thenable'; // not resolved, in pending state , should be resolve()
  }
};
Promise.resolve(thenable).then(value => console.log('hello' + value));
//nothing

//#9
//What would be printed out?
const pm1 = new Promise( (resolve,reject) => resolve( "B" ) );
const pm2 = new Promise( (resolve,reject) => resolve( pm1 ) );
const pm3 = new Promise( (resolve,reject) => resolve( "A" ) );

pm2.then( v => console.log( v ) );
pm3.then( v => console.log( v ) );
//Your answer:
//A
//B

//#10
const pr1 = Promise.resolve( 42 );

const pr2 = Promise.resolve( pr1 );

console.log(pr1 === pr2); // What is the result?
//true

//#11
//What would be printed out?
const prms = Promise.resolve(10);

prms.then(val => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(val * 2), 10);
  })
}).then(val => console.log(val));
//Your answer
//20

//#12
/**
Given an array which contains both promise instance and primitive value. 
Write a function called "promiseEach" to iterate the given array to print their value(resolved value for promise, the value itself for primitive value) to the console serially(which means the second item of array should be run/printed after the first one(promise) done). 
NOTE: do not use any 3rd part library.

*/
const delay = (time = 50) => {
  return new Promise((resolve, reject) => {
      setTimeout(resolve, time);
  });
};
const proms1 = Promise.resolve(delay()).then(() => 1);
const proms2 = Promise.resolve(2);
const val3 = 3;

const array = [proms1, proms2, val3];
function promiseEach(promises = []) {
  //Write your code here, do not utilize any 3rd library
  let orderPromise = Promise.resolve();
  promises.forEach(pr => {
    orderPromise = orderPromise.then(() => Promise.resolve(pr)).then(console.log);
  });
}

function promiseEach1(promises = []) {
  promises.reduce((orderPromise, pr) => orderPromise.then(() => Promise.resolve(pr).then(console.log)), Promise.resolve());
}

promiseEach1(array); // the console will print the number 1, 2 and 3 in order. 


//#13
//Given a function below which is a callback-based function which callback is error first function. 
//For the simplicity, if the first argument is given 0, the error will be created and passed to callback.
function doAsync(val, callback) {
  let error = null;
  if(val === 0) {
    error = new Error('Error message!');
  }
  setTimeout(() => callback(error, val), 50);
}
//Given a function which is error first function. If there is error, print the error message, otherwise print second argument.
function printValue(err, result) {
  if(err) {
    console.error(err.message);
  } else {
    console.log(result);
  }
}

doAsync(1, printValue); // 1
doAsync(0, printValue); //Error message!

/**
Write helper function to promisify(lift) the function "doAsync", so that it can be used as a promise like the example shown. Do not utilize any 3rd party library.
*/
function promisify(fn) {
  //Write your code here and do not use any 3rd party library.
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn.apply(null, args.concat((err, resp) => err ? reject(err) : resolve(resp)));
    });
  }
}

const promiseAware = promisify(doAsync);
promiseAware(1).then(console.log); // 1
promiseAware(0).catch(reason => console.error(reason.message)); //Error message!



//#14
//What's the state of racePromise? 
const racePromise = Promise.race([]);
//your answer:
//never resolved

//#15
//Could explain what is the problem of the function below? If you were the author, how do you refactor it? 
function badFunc(val) {
  if(val <= 0) {
    throw new Error('Error happened');
  }
  return Promise.resolve(val);
}
//Write your solution here.
function betterFunc(val) { 
  //Write your code here
  if(val <= 0) {
    return Promise.reject(new Error('Error happened'));
  }
  return Promise.resolve(val);
}
//The problem of the badFunc is it will not be alwasy returning a promise so that it is very difficult to handle it by users who call it. 


//#16
//Create a helper functin in Promise object - Promise.first, which accepts an array of promises or combination of promises and primitive value. It works this way: the promise returned from Promise.first can be resolved as long as one of promise of given promises is resolved, the first resolved promise value would be pass to the main promise. If all given promises are rejected, then the main promise is rejected. 
if(!Promise.first) {
  Promise.first = function(prs) {
    //write your code here
    return new Promise((resolve, reject) => {
      const rejections = [];
      prs.forEach(pr => {
        Promise.resolve(pr).then(resolve).catch(checkRejection);
      });
      
      function checkRejection(err) {
        rejections.push(err);
        if(rejections.length === prs.length) {
          reject(rejections);
        }
      }
    });
  }
}

Promise.first([Promise.resolve(delay()).then(() => 1), Promise.resolve(2), Promise.resolve(3)]).then(console.log); // 2;

Promise.first([Promise.reject(1), Promise.reject(2), Promise.reject(3)]).catch(console.log); // rejected with [1,2,3];
//E.g. it can be used this way: 
//Promise.first([promise1, 1, promise2]); 







