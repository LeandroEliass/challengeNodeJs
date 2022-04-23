const express = require("express");
const router = express.Router()
let controller = require("../controllers/user")
const user= require("../middlewares/validationUser") 
//registrarse
router.get('/register', controller.register)
router.post("/create",user, controller.save)

//login
router.get('/login', controller.login)
router.post("/access", controller.access)

router.get("/check", function(req, res) {
    if(req.session.user == undefined){
     res.send("No estas logeado")   
    }else{
        res.send("usuario logeado"+ req.session.user.email)
    }
})

//logout
router.post("/logout", controller.logout)

module.exports = router