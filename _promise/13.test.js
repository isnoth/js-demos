function hello(fn){
  //console.log(arguments)
  var args = Array.from(arguments).slice(1)
  return function(){
    //console.log(fn, args)
    return fn.apply(this, args)
  }
}

hello(function(a, b){
  console.log(a, b)
}, 1, 2)()
