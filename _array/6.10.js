var members = {
    0: {name: 'Jonathan', role: 'Dev', age: 15},
    1: {name: 'Richard', role: 'Dev', age: 20},
    2: {name: 'Lisa', role: 'Tester', age: 20},
    3: {name: 'Jelsy', role: 'LM', age: 30},
    4: {name: 'Eric', role: 'Tester', age: 25},
    length: 5
};

function groupRole(members){
  return Array.from(members).reduce((group, i)=>{
    group[i.role] = group[i.role] || []
    group[i.role].push(i)
    return group
  }, {})
}

console.log(groupRole(members))
