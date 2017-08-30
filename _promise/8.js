const thenable = {
  then(resolve) {
    //return 'thenable';
    //resolve('thenable')
    return 'thenable'
  }
};
Promise.resolve(thenable)
.then(value =>{ 
  console.log('hello' + value)
});

console.log(Promise.resolve(thenable).then())


Promise.resolve(()=>{

})
