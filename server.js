const express = require('express');
const app = express();
const port = 9000;

function middleware(req, res, next){
console.log("Madina Rustamovna");
next();

}
app.get("/", middleware, (req, res) =>{ 
  res.send("rahmat😍😍")
})

app.listen(port, console.log(port))