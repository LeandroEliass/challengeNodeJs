
let db = require("../database/models")
const sequelize = db.sequelize
const Op = db.Sequelize.Op
const {validationResult} = require("express-validator")

let controller ={
    list: (req,res)=>{ 
        db.Movie.findAll()
       .then(function(movies){return res.render("./index",{movies:movies}) 
    })
    .catch(error=>res.send(error))},
    detail: (req,res)=>{
        db.Movie.findByPk(req.params.id,{ include:[{
            association:"genre"},{association:"actors" }
        ]})
        
        .then(function(movie){
            /* res.send(movie) */
            res.render("./detail",{movie:movie})})
            .catch(error=>res.send(error))
        },
    create: (req,res)=>{
        let genre = db.Genre.findAll()
        Promise.all([genre])
        .then(function([genre]){ return res.render("./createMovie", {genre})})
        .catch(error=>res.send(error))
    },
    save: (req,res)=>{
       
        let errors = validationResult(req);
        
       
        if(!errors.isEmpty()){
            let genre = db.Genre.findAll()
            Promise.all([genre])
            .then(function([genre]){ return res.render("./createMovie", {genre, errors : errors.mapped(), oldData:req.body})})
        } else {
        db.Movie.create({
                title: req.body.title,
                rating:req.body.rating,
                awards:req.body.awards,
                release_date:req.body.release_date,
                length:req.body.length,
                genre_id:req.body.genre_id
            })
        .then(function(){
        return res.redirect("/")})
        .catch(error=>res.send(error))
        }}

}

module.exports= controller