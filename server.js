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
!"jsonwebtoken.sign()" token berish uchun ishlatiladi
kelgan tokenni biz "jwt.io" degan saytda decode qila olamiz! 
! "iat"(instansed at) -> berilgan vaqti degani -> "moment.js" degan packagega tashab ochib ko`rolamiz

    res.sendStatus(401)  ===>  res.status(401).send({ status: 401, message: "user not found"  })

 */
const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
const customFs = require("./lib/fsDealFile");
const secretKey = "Secret_Key";

const users = new customFs("./model/users.json");
console.log(users);


const port = 9000;

const verifyToken =(req, res, next) =>{
  try {
    const { token } = req.headers;
  const {id, name } = jwt.verify(token, secretKey);
   const allUsers = users.read();
  const foundUser = JSON.parse(allUsers);
  const user = foundUser.find(e => e.id == id)

   if(!user){
    res.sendStatus(401)
  }else{
next()
  }
  } catch (error) {
    res.sendStatus(401);
    
  }
}

app.post("/login", (req, res)=>{
  const { name, password } = req.body;

  const allUsers = users.read();
  const foundUser = JSON.parse(allUsers);
  const user = foundUser.find(e => e.name == name && e.password == password)
  const accessToken = jwt.sign({ id: user.id, name: user.name }) //--> token olish uchun secretKey bo`lishi shart
  
  if(!user){
    res.sendStatus(401)
  }else{
    res.json(accessToken);
  }
  
})

app.get("/posts", verifyToken, (req, res) =>{ 
  console.log(req.headers);
  
  res.send("topildiz🎉")
})

app.listen(port, console.log(port))