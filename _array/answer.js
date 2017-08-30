/**
 * Please preview the following links carefully before doing the exercises below.
 * http://javascript.ruanyifeng.com/grammar/array.html
 * http://javascript.ruanyifeng.com/stdlib/array.html
 * http://es6.ruanyifeng.com/#docs/array
 *
 */

//#1
var array = [1,2];
array['a'] = 3;
array[3] = 4;
array['5']=6;
//What's the result of array.length?
//6
//What's the result of array[2]?
undefined

//#2
//What is array-like object, please write an example below

//How to convert an array-like object to an array? Please write an example below
Array.from();

//#3
var arr1 = ['a', 'b', 'c'];
arr1['b']=2;
//What's the result of ('b' in arr1), true or false?
false

//#4
var arr2 = new Array(4);
arr2[1] = 1;
arr2[2] = undefined;
arr2.forEach((item, idx) => console.log(`${idx}.${item}`)); // ES5: console.log(idx + '.' + item);

//What would be printed out to the console?
1.1
2.undefined


//#5
//What is the best way to check given value is an Array or not? Please write an example below
Array.isArray();


//#6
//try NOT to use raw for-loop and any extra variables for #6 exercise
var members = {
    0: {name: 'Jonathan', role: 'Dev', age: 15},
    1: {name: 'Richard', role: 'Dev', age: 20},
    2: {name: 'Lisa', role: 'Tester', age: 20},
    3: {name: 'Jelsy', role: 'LM', age: 30},
    4: {name: 'Eric', role: 'Tester', age: 25},
    length: 5
};

//#6.1
//Write a function to subtract all members' ages by base 1000(1000 - the sum of all members ages).
function substractAges(persons, base) {
    return Array.from(members).reduce((leftAges, memberAge) => leftAges - memberAge, base);
}
console.log(substractAges(members, 1000)); //890

//#6.2
//Write a function to get all names as string with '|' separator between each name
function getNames(persons) {
    return Array.from(persons).map(member => member.name).join(' | ');
}
console.log(getNames(members)); // 'Jonathan | Richard | Lisa | Jelsy | Eric'


//#6.3
//Write a function to get all members' names whose role is 'Dev'
function getDevs(persons) {
    return Array.from(persons).filter(member => member.role === 'Dev').map(member => member.name);
}
console.log(getDevs(members)); // ['Jonathan', 'Richard']



//#6.4
//Write a function to return new members in which member has extra property department: UICA, but do not change the original member object in members.
function getMembersWithDep(persons) {
    return Array.from(persons).map(member => ({name: member.name, role: member.role, age: member.age, department: 'UICA'}), member));
}
console.log(getMembersWithDep(members)); // output looks like: [{name: 'Jonathan', role: 'Dev', age: 15, department: 'UICA' }...]


//#6.5
//Write a function to return true or false if all members' role is 'Tester'
function isAllTesters(persons) {
    return Array.from(persons).every(member => member.role === 'Tester');
}
console.log(isAllTesters(members)); // false



//#6.6
//Write a function to return get the first member who is LM
function getFirstLM(persons) {
    //write your code here
  return Array.from(persons).find(member => member.role === 'LM');
}
console.log(findFirstLM(members)); // {name: 'Jelsy', role: 'LM', age: 30}




//#6.7
//Here is another group of members
var anotherMembers = [
    {name: 'CJ', role: 'Dev', age: 15},
    {name: 'Candy', role: 'PO', age: 20},
    {name: 'Emma', role: 'Dev', age: 20}
]
//Write a function to combine members and anotherMembers to one group(array).
function combineMembers(persons, anotherPersons) {
    //write your code here
    return Array.from(persons).concat(anotherMembers);
}
console.log(combineMembers(members, anotherMembers)); // [{name: 'Jonathan', role: 'Dev', age: 15}, .... , {name: 'CJ', role: 'Dev', age: 15}, ... , {name: 'Emma', role: 'Dev', age: 20}]


//#6.8
//Write a function to find the first two members whose age is over 18 and return the found members as a string like "xxx is xxx old".
function findFirstTwoMembersOver18(persons) {
    //write your code here
    return Array.from(persons).filter(member => member.age > 18).slice(0, 2).map(member => `${member.name} is ${member.age} old`);
}
console.log(findFirstTwoMembersOver18(members)); // ['Richard is 20 old', 'Lisa is 20 old']



/////////////////// Below is for live practice on the course ///////////////////////////////////
// The exercise below is for live practice on the course, please ignore it during your preview

//#6.9
//If the size of members is over 500, how to optimize the function "findFirstTwoMembersOver18"??
function findFirstTwoMembersOver18Optimized(persons) {
    //Write your solution here
    return _(Array.from(persons)).filter(member => member.age > 18).map(member => `${member.name} is ${member.age} old`).take(2).value();
}
console.log(findFirstTwoMembersOver18(members)); // ['Richard is 20 old', 'Lisa is 20 old']

//#6.10
//Write a function to return an object which group the role for all members.
function groupMembersByRole(persons) {
    //Write your solution here
    return Array.from(persons).reduce((group, cur) => {
        group[cur.role] = group[cur.role] || [];
        group[cur.role].push(cur);
        return group;
    }, {});
}


console.log(groupMembersByRole(members)); // {Dev: [{name: 'Jonathan', role: 'Dev', age: 15}, {name: 'Richard', role: 'Dev', age: 20}], Tester: [{name: 'Lisa', role: 'Tester', age: 20}, {name: 'Eric', role: 'Tester', age: 25}, LM: [{name: 'Jelsy', role: 'LM', age: 30}]]}

//#6.11
//Write a function to find the member who is oldest
function findOldestMember(persons) {
   return Arrray.from(persons).reduce((oldest, member) => {
      return oldest.age > member.age ? oldest : member;
   });
}
console.log(findOldestMember(members)); // {name: 'Jelsy', role: 'LM', age: 30}
