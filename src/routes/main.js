const express = require("express");
const router = express.Router()
let controller = require("../controllers/main")
let validations = require("../middlewares/validationsMovie")
let auth = require("../middlewares/auth")


// Listado de películas
router.get("/", controller.list)
// Detalles de cada película
router.get("/movie/:id", controller.detail)
// Crear nueva Película
router.get("/create",auth, controller.create)
// Save pelicula 
router.post("/movie/save",auth,validations,controller.save)
// Editar Pelicula
router.get("/:id/edit",auth,controller.edit)
router.put("/:id",auth, controller.update)
// Eliminar Pelicula
router.delete("/delete/:id",auth, controller.delete)
module.exports = router