const express = require("express");
const router = express.Router()
let controller = require("../controllers/main")
let validations = require("../middlewares/validationsMovie")


// Listado de películas
router.get("/", controller.list)
// Detalles de cada película
router.get("/:id", controller.detail)
// Crear nueva Película
router.get("/movie/create", controller.create)
// Save pelicula 
router.post("/movie/save",validations,controller.save)

module.exports = router