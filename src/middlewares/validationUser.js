const {body} = require("express-validator")


module.exports=[
    
    body("name")
    .notEmpty()
    .isLength({ min: 2, max:16})
    .withMessage("Nombre demasiado corto"),
    body("email")
    .notEmpty()
    .isEmail()
    .withMessage("example@example.com"),
    body("password")
    .notEmpty()
    .isLength({ min: 4,max:16}).withMessage("La contraseña debe comprender entre 4 y 16 caracteres")
    
]
