This is an example code of express and bull (also, bull-arena).

*Explanation*
- app.js: Entry point for express and configuration for bull-arena.
- jobs.js: Example for bull's job enqueuing.

*How to use*
_You have to run redis at 127.0.0.1 on port 6379._

```
 $ node app.js // start app
 $ open http://localhost:3000/arena // open UI
 $ curl http://localhost:3000/jobs // enqueue a job
```