let numbers = [[1, 2], [3, 4]];
let numbers2 = [[1, 2, 1], [3, 4]];

function sumUp(data) {
  //let [[...a], [...b]] = data
  //return [...a, ...b].reduce((a, b)=>(a+b ))

  return data.reduce((sum, set)=>{
    return sum+ set.reduce((sum1, i)=>sum1+i)
  }, 0)
}
console.log(sumUp(numbers)); // 10
console.log(sumUp(numbers2));
