const express = require("express");
const path = require("path");
const app = express();
const method = require("method-override")
const session= require("express-session")
const cookie= require("cookie-parser")
const user = require("./middlewares/users")

app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo npm test")})
app.set("view engine", "ejs" )
app.set("views", path.resolve(__dirname, "views"))
app.use(express.static(path.resolve(__dirname, "../public")));
app.use("/upload",express.static(path.resolve(__dirname, "../upload")))
app.use(method("m"))
app.use(express.urlencoded({extended:true}))
app.use(cookie())
app.use(session({secret:"movie", resave: true, saveUninitialized: false}))
app.use(user)

const rutasMain = require("./routes/main")
const rutasUsers = require("./routes/user")


app.use("/",rutasMain);
app.use("/users",rutasUsers); 


