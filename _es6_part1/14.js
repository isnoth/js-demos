var s = "Äãa"

console.log(s)

console.log(s.codePointAt(0) === "Äã".codePointAt(0))
console.log(s.codePointAt(1) === "a".codePointAt(0))


for (let i of s){
  console.log(i)
}

