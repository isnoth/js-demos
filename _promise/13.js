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
//function promisify(fn) {
//    //Write your code here and do not use any 3rd party library.
//  return function(...args){
//    return new Promise((resolve, reject)=>{
//      //console.log('args is:', args)
//      fn.call(null, ...args,  (err, resp)=>err? reject(err): resolve(resp))
//    })
//  }
//}


function promisify(fn){
  return function(...args){
    return new Promise ((resolve, reject)=>{
      return fn.apply(null, args.concat((err, res)=>(err?reject(err): resolve(res))))
    })
  }
}

const promiseAware = promisify(doAsync); // (args){ => promise}
//console.log('promiseAware:', promiseAware, promiseAware(1))

promiseAware(1).then(console.log); // 1
promiseAware(0).catch(reason => console.error(reason.message)); //Error message!

