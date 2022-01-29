const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
const PORT = 3000

// app.use bodyparser
app.use(bodyParser.urlencoded({extended:true}))

//using static to serve local files
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})

app.post("/",(req,res) => {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email

    console.log(firstName,lastName,email);

})

app.listen(PORT, () => {
    console.log("server is Running on port " + PORT);
})

//api key
//f8ef32ebc8423a306881654568dad616-us14