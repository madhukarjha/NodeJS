const express = require('express');
const cluster = require('cluster');
const totalCpus = require('os').cpus().length;
const fibonacci = require('./fibonacci');
const sumOfPrimes = require('./sumofprimes');

if (cluster.isMaster) {
    console.log('totalCups', totalCpus);
  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }
  cluster.on('online', (worker) => {
    console.log(
      `Worker Id is ${worker.id} and the PID is: ${worker.process.pid}`
    );
  });
  cluster.on('exit', (worker) => {
    console.log(
      `Worker Id ${worker.id} with PID ${worker.process.pid} is offline`
    );
  });
} else {
  const app = express();
  app.get('/ping', (req, res)=>{
    res.send(`<h1>pong</h1>`)
  });
  app.get('/:number', (req, res) => {
      console.log(req.params.number);
    // let number = fibonacci.fibonacci(
    //   Number.parseInt(req.params.number)
    // );
    res.send(`<h1>${sumOfPrimes.sumOfPrimes(
      Number.parseInt(req.params.number)
    )}</h1>`);
  });

  app.listen(3000, () => console.log('Express server is running on port 3000'));
}



//https://medium.com/beyond-coding/take-advantage-of-node-js-cluster-and-child-processes-with-pm2-rabbitmq-redis-and-nginx-c83eccfb8af8