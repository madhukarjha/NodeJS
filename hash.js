//process.env.UV_THREADPOOL_SIZE = 1;

var fs = require('fs');
var util = require('util');
 
var start =Date.now();
 
for (var i = 0; i < 10; ++i) {
  (function (id) {
    fs.readdir('.', function () {
      var end = Date.now() - start;
      console.log(util.format(`readdir ${id} finished in ${end}`));
    });
  })(i);
}

// const crypto = require('crypto');
// const http = require('http');

// function run(iterations) {
//     const results = {};
//     const start = Date.now()
//     for(let i=0; i< iterations; i++) {
//         //results[i+1] = {start: Date.now()};
//         results[i+1] = {};
//         http.request('http://api.coindesk.com/v1/bpi/currentprice.json', (res)=>{
//             res.on('data', ()=> {});
//             res.on('end', ()=> {
//                 results[i+1].end = Date.now() - start;
//             });
//         }).end();
//     }
//     setTimeout(()=>{
//         printIterationTimestamps(results);
//     }, 5000);
// }
//     function printIterationTimestamps(result) {
//         let ref = null;
//         Object.keys(result).forEach((key) => {
//             console.log(`  Iteration ${key} time ${result[key].end} `)
//         //   if (key === '1') {
//         //     ref = result[key].start;
//         //   }
          
//         //   const start = key === '1' ? 0 : result[key].start - ref;
//         //   const end = result[key].end - ref;
      
//         //   console.log(`  Iteration ${key} started at ${start} and ended at ${end}`);
//         });
//       }
      
//       if (process.argv && process.argv.length !== 3) {
//         throw new Error('Invalid args provided (Expected number of iterations)');
//       } else {
//         run(parseInt(process.argv[2], 10));
//       }
// const Algh = 'sha256';
// const secret = 'abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg';
// const hash = crypto.createHmac('sha256', 'secret')
// .update(secret)
// .digest('hex');

//console.log('1: ', Date.now() - start);
//crypto.createHash(Algh, secret).update("Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World").digest("hex");


// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
//     console.log('1: ', Date.now() - start);
// });

// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
//     console.log('2: ', Date.now() - start);
// });

// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
//     console.log('3: ', Date.now() - start);
// });
// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
//     console.log('4: ', Date.now() - start);
// });
//     //console.time("first");
// const start = Date.now();

// var Algh=crypto.getHashes()[0];
// for(var i2=0;i2<1000000;i2++){
//     crypto.createHash(Algh).update("Hello World").digest("hex");
// }
// console.log('1.', Date.now() - start);
// //console.timeEnd(Algh);  

// var Algh=crypto.getHashes()[0];
// for(var i2=0;i2<1000000;i2++){
//     crypto.createHash(Algh).update("Hello World").digest("hex");
// }
// console.log('2.', Date.now() - start);
// //console.timeEnd(Algh);  


// var Algh=crypto.getHashes()[0];
// for(var i2=0;i2<1000000;i2++){
//     crypto.createHash(Algh).update("Hello World").digest("hex");
// }
// console.log('3.', Date.now() - start);
// //console.timeEnd(Algh);  


// var Algh=crypto.getHashes()[0];
// for(var i2=0;i2<1000000;i2++){
//     crypto.createHash(Algh).update("Hello World").digest("hex");
// }
// console.log('4.', Date.now() - start);
// //console.timeEnd(Algh);  
