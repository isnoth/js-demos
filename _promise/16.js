//What would be printed out?
const pm1 = new Promise( (resolve,reject) => reject( "B" ) );
const pm2 = new Promise( (resolve,reject) => reject( pm1 ) );
const pm3 = new Promise( (resolve,reject) => reject( "A" ) );



if(!Promise.first) {
    Promise.first = function(prs) {
      let rejections = []
      return new Promise((resolve, reject)=>{
        prs.forEach(i=>{
          Promise.resolve(i).then(resolve).catch((err)=>{
            rejections.push(err)
            if (rejections.length == prs.length){
              reject(rejections)
            }
          })
        })
      })
    }
}



Promise.first([pm1, pm2, pm3])
.then(console.log)
.catch(console.log)

;
