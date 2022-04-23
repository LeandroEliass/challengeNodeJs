const auth = (req,res,next)=> req.session && req.session.user ? req.session.user.rol == 1 ? next() : res.redirect("/users/login") : res.redirect("/users/login")



module.exports= auth