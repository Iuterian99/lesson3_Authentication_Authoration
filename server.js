/*
/:en/
authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.
/:uz/
! Authentication
Saytda 1-marta Ro`yxatdan o`tayotgucha login qilishimiz Authentication deyiladi!
!Authorization
login qilgan odamni nimalarga huquqi borligini aniqlash
! "npm i jsonwebtoken" buni 14-qatorda chaqirib oldim
Authorizatsiyadan foydalanish uchun cmd yoki terminalda "npm i jsonwebtoken" deb ustanofka qilishimiz kk!
 */
const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
const customFs = require("./lib/fsDealFile");

const users = new customFs("./model/users.json");
console.log(users);


const port = 9000;

app.post("/login", (req, res)=>{
  const { name, password } = req.body;
  const allUsers = users.read();
  console.log(JSON.parse(allUsers));
  res.send("Ma`lumot keldi!");
  
})

app.get("/posts", (req, res) =>{ 
  res.send("rahmat😍😍")
})

app.listen(port, console.log(port))