const {body} = require("express-validator")


module.exports=[
    
    body("title")
    .isLength({ min: 2, max:16})
    .withMessage("Title demasiado corto"),
    body("rating")
    .isLength({ min: 2, max:3})
    .withMessage("Ingresar números positivos"),
    body("length")
    .isLength({ min:2, max:3})
    .withMessage("En minutos"),
    
]
