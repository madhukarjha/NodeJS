const express = require('express');
const sumOfPrimes = require('./sumofprimes');
const runProfiler = require('./profile/runProfiler');

  const app = express();
  app.get('/ping', (req, res)=>{
    res.send(`<h1>pong</h1>`)
  });

  app.get('/_profile', async (req, res) => {
    try {
      let profile = await runProfiler(30)
      res.attachment(`profile_${Date.now()}.cpuprofile`)
      res.send(profile)
    } catch (er) {
      res.status(500).send(er.message)
    }
  });
  app.get('/:number', (req, res) => {
    res.send(`<h1>${sumOfPrimes.sumOfPrimes(
      Number.parseInt(req.params.number)
    )}</h1>`);
  });

  app.listen(3000, () => console.log('Express server is running on port 3000'));


