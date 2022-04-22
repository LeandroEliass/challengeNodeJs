const express = require("express");
const path = require("path");
const app = express();
const method = require("method-override")


app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo npm test")})
app.set("view engine", "ejs" )
app.set("views", path.resolve(__dirname, "views"))
app.use(express.static(path.resolve(__dirname, "../public")));
app.use("/upload",express.static(path.resolve(__dirname, "../upload")))
app.use(method("m"))
app.use(express.urlencoded({extended:true}))


const rutasMain = require("./routes/main")
/* const rutasProducts = require("./routes/product")
const rutasUsers = require("./routes/users") */


app.use("/",rutasMain);
/* app.use("/products",rutasProducts);
app.use("/users",rutasUsers); */


