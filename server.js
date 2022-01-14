/*
/:en/
authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.
/:uz/
! Authentication
Saytda 1-marta Ro`yxatdan o`tayotgucha login qilishimiz Authentication deyiladi!
!Authorization
login qilgan odamni nimalarga huquqi borligini aniqlash
!Authorizatsiyadan foydalanish uchun cmd yoki terminalda "npm i jsonwebtoken" deb ustanofka qilishimiz kk!
 */
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