const express = require("express")
const app = express()
const { fork } = require("child_process")
app.get("/ping", (req, res) => {
    res.send(`<h1>pong</h1>`)
  })
app.get("/:number", (req, res) => {
  const childProcess = fork("./21forked.js") //the first argument to fork() is the name of the js file to be run by the child process
  childProcess.send({ number: parseInt(req.params.number) }) //send method is used to send message to child process through IPC
  const startTime = new Date()
  childProcess.on("message", message => {
    //on("message") method is used to listen for messages send by the child process
    const endTime = new Date()
    console.log(message);
    res.json({
      message,
      time: endTime.getTime() - startTime.getTime() + "ms",
    })
  })
})

app.listen(3000, () => console.log("listening on port 3636"))