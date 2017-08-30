//#10
const pr1 = Promise.resolve( 42 );

const pr2 = Promise.resolve( pr1 );

console.log(pr1, pr2)

console.log(pr1 === pr2); // What is the result?
