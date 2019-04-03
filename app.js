const express = require('express');
const app = express();
const Arena = require('bull-arena');
const arenaConfig = Arena({
  queues: [
    {
      name: "Sample",
      hostId: "bull",
      redis: {
        port: "6379",
        host: "127.0.0.1"
      },
    },
    {
      name: "Sample",
      hostId: "dog",
      redis: {
        port: "6379",
        host: "127.0.0.1"
      },
    }
  ],
},
{
  basePath: '/arena',
  disableListen: true
});

app.use('/', arenaConfig);
app.use('/jobs', require('./jobs.js'));
app.listen(3000, () => console.log('Listening on port 3000!'));