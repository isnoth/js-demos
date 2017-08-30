var a = (function (){
  var instance = null;

  return {
    getInstance: getInstance
  }

  function getInstance (){
    return instance?instance:instance={name: 1}
  }
})()


console.log(a)
console.log(a.getInstance())
b = a.getInstance()
c = a.getInstance()

console.log(b, c, b===c)

//var c = new a()
//console.log(c)
//console.log( c.name )
