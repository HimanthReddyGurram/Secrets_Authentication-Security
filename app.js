const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const port=4000


const app = express()

app.use(express.static("public"))

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect("mongodb://127.0.0.1:27017/secretDB")

const userSchema = {
    email: String,
    password : String
}

const user = new mongoose.model("user", userSchema)

const secSchema = {
    secre: String,
}

const secret = new mongoose.model("secret",secSchema)

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/login", (req, res) => {
    res.render("login", { a: "" })
})

app.get("/register", (req, res) => {
    res.render("register", { a: "" })
})

app.get("/logout", (req, res) => {
    res.redirect("/login")
})

app.get("/submit", (req, res) => {
    res.render("submit")
})

app.post("/", (req, res) => {
    res.render("home")
})

app.post("/login", (req, res) => {
    async function a(){
        a = await user.findOne({ email: req.body.username })
        if (!a) {
            res.render("login", { a: "invalid username" })
        } else {
            if (a.password === req.body.password) {
                res.render("secrets",{secrr:""})
            } else {
                res.render("login", { a: "invalid password" })
            }
        }
    }a()
})

app.post("/register", (req, res) => {

 async function a(){
        a = await user.findOne({ email: req.body.username })
        if (!a) {
            const newUser = new user({
        email : req.body.username,
        password : req.body.password
    })
    newUser.save()
            res.render("secrets", { secrr: "" })
        } else {
            res.render("register",{a:"already registered.. please <a href='/login'> login </a>"})
        }
    }a()

    
})


app.post("/submit", (req, res) => {
    
    const newSecret = new secret({
        secre:req.body.secret
    })
    newSecret.save()
    res.redirect("/sub")
    
})

app.get("/sub", (req, res) => {
    async function a() {
        
        ab = await secret.find()
        console.log(ab)
        res.render("secrets",{secrr:ab})
    }a()

})

app.listen(port, () => {
    console.log(`running on port ${port}.`)
})