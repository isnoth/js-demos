var a = {
  setName: function(name){
    this.name = name
  },

  sayHello: function(){
    console.log(`hello ${this.name}`)
  }
}

var b = Object.create(a)
b.init = function(name){
  this.setName(name)
}


var b1 = Object.create(b)
b1.init('this is b1')
b1.sayHello()

//b.setName('this is b')
//b.sayHello()
//
