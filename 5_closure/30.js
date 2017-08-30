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

console.log(foo.call({id: 4}))

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

