//Given the data below
const data = [
    { first: '<Jane>', middle: 'Hebe', last: 'Bond' },
    { first: 'Lars', middle: 'Zack', last: '<Croft>' },
];
//Please write a function to generate a HTML table(hint: use template string)

function tableTmpl(data) {
  //write your implementation here:
  return ` <table>
    ${data.map(people=>(`<tr>
      <td>${people.first}</td>
      <td>${people.middle}</td>
      <td>${people.last}</td>
    </tr>`)).join('')}
  </table>
  `
}

console.log(tableTmpl(data))

