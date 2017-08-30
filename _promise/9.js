const pm1 = new Promise( (resolve,reject) => resolve( "B" ) );
const pm2 = new Promise( (resolve,reject) => resolve( pm1 ) );
const pm3 = new Promise( (resolve,reject) => resolve( "A" ) );

pm2.then( v => console.log( v ) );
pm3.then( v => console.log( v ) );
