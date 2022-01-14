const express = require('express');
const app = express();
const port = 9000;


app.get("/", (req, res) =>{ 
  res.send("rahmat😍😍")
})

app.listen(port, console.log(port))