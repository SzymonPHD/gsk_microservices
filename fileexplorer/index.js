var express = require('express')
var filexplorer = require('./lib/filexplorer.js')

var app = express()

app.get('/', (req, res) => {
  res.send(
    filexplorer.listFiles()
  )
})

var host = 'localhost'
var port = 8080;



// http.createServer(app).listen(80);
app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`)
})