
const user=(req, res, next) =>{
    res.locals.logged = false;

    let emailCookie = req.cookies.userEmail;
    let userFromCookie = req.cookies

    if(req.session.user){
        res.locals.logged = true;
        res.locals.user = req.session.user
    }
    
    next()

}
module.exports= user