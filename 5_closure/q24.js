var ary = [a=>a+1, a=>a+2]
var a = ary.reduce((a,b)=>{ 
  console.log('b,a: ',b, a)
  console.log(b(a))
  return b(a)
}, 1)
console.log(a)
