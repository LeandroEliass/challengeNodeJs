let db = require("../database/models")
const sequelize = db.sequelize
const validator= require("express-validator")
const bcrypt= require("bcrypt")
const { resetWatchers } = require("nodemon/lib/monitor/watch")

const controller = {
 register:(req,res)=>{
     res.render('./user/register')
 },
 login:(req,res)=>{res.render('./user/login')},
 save: (req,res)=>{
    db.User.findOne({
        where:{
            email: req.body.email
        }
    })
   .then(function(exist){
    let errors = validator.validationResult(req);
   
   if(!errors.isEmpty()){
    return res.render("./user/register",{
        errors: errors.mapped(),oldData: req.body})}

    if(exist){
        return res.render("./user/register",{
            errors:{
                email:{
                    msg: "El email ya se encuentra registrado"
                }
            }, oldData: req.body})}
        })
    db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,10), 
        remember_token: req.body.rPassword,
        rol: req.body.email.includes("@digitalhouse")? 1 : 0
    })
        .then(function(){
        res.render("./user/login")}) 
        .catch(error=>res.send(error))
 },
 access: (req,res)=>{
    db.User.findOne({
        where:{
            email: req.body.email
        }
    })
    .then(users =>{
        let errors = validator.validationResult(req);
    
        if(!errors.isEmpty()){
            return res.render("./user/login",{
                errors: errors.mapped() })}
        
        if(!users){ 
                    return res.render('./user/login',{
                         errors:{
                             email:{
                                 msg: 'Email no está registrado',
                             }
                         }
                     })
                 }
        if(!bcrypt.compareSync(req.body.password, users.password)){
                return res.render('./user/login',
                    {styles: ["login"],
                        errors:{
                            password:{
                                msg: 'La Contraseña es incorrecta',
                            }
                        }
                    })
                }
                if(req.body.remember){
                    res.cookie('email',req.body.email,{maxAge:1000*60*60*24*30})
                }
        
        req.session.user = users
                
        return res.redirect("/")  

    })
    .catch(error=>res.send(error))
},
logout: (req,res)=> {
    delete req.session.user
    res.cookie("email",null,{maxAge:-1})
    return res.redirect("/users/login")
}
 }  


module.exports = controller