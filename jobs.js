const express = require('express');
const Bull = require("bull");
const router = express.Router();
const queue = new Bull('Sample', 'redis://127.0.0.1:6379');
queue.process(function(job, done) {
  console.log('start executing your job');
  let rand = Math.floor(Math.random() * 3);
  console.log(rand);
  setTimeout(function() {
    if (rand == 2) {
      console.log('Success!');
      done();
    } else {
      console.log('Failed...');
      done(Error);
    }
  }, 1000 * 5);
});

router.get('/', function(req, res, next) {
  queue.add({ a: 'b' });
  res.send('You request is accepted.\n')
});
module.exports = router;