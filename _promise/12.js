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
  promises.reduce((resolvedPromise, i)=>{
    return resolvedPromise.then(()=>{
      return Promise.resolve(i).then(result=>{console.log(result)}) //return resolved(undefined)
    })
  }, Promise.resolve())
}


function promiseEach1(promises = []) {
  promises.reduce((orderPromise, pr) => {
    return orderPromise.then(() => Promise.resolve(pr).then(console.log))
  }, Promise.resolve());
}


promiseEach(array)
//promiseEach1(array)
