const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/convert", (req,res) => {
    res.send({
        "massage": "Berhasil pemanggilan GET."
    })
})

app.get("/convert/celcius/:suhu", (req,res) => {
    let celcius = req.params.suhu;
    let reamur = 4 * celcius / 5;
    let fahrenheit = 9 * celcius / 5 + 32;
    let kelvin = parseInt(celcius) + 273;
    res.send({
        "celcius": celcius,
        "result":{
        "reamur": reamur,
        "fahrenheit": fahrenheit,
        "kelvin": kelvin
        } 
    })
})


            
        
        
app.get("/convert/reamur/:suhu", (req,res) => {
    let reamur = req.params.suhu;
    let celcius = 5 * reamur / 4;
    let fahrenheit = 9 * reamur / 4 + 32;
    let kelvin = 5 * reamur / 4 + 273;
    res.send({
        "reamur": reamur,
        "result":{
        "celcius": celcius,
        "fahrenheit": fahrenheit,
        "kelvin": kelvin
        } 
    })
})

app.get("/convert/fahrenhait/:suhu", (req,res) => {
    let fahrenhait = req.params.suhu;
    let celcius = 5 * (fahrenhait - 32) / 9;
    let reamur = 4 * (fahrenhait - 32) / 9;
    let kelvin = (fahrenhait - 32) * 5 / 9 + 273;
    res.send({
        "fahrenhait": fahrenhait,
        "result":{
         "celcius": celcius,
         "reamur": reamur,
         "kelvin": kelvin
        } 
    })
})

app.get("/convert/kelvin/:suhu", (req,res) => {
    let kelvin = req.params.suhu;
    let celcius = kelvin - 273;
    let reamur = 4 * (kelvin - 273) / 5;
    let fahrenhait = 9 * (kelvin - 273) / 5 + 32;
    res.send({
        "kelvin": kelvin,
        "result":{
        "celcius": celcius,
        "reamur": reamur,
        "fahrenhait": fahrenhait
        } 
    })
})



app.listen(port, () => {
    console.log(`App running post ${port}`);
})
