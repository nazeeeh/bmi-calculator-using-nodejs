const express = require("express");
const bodyParser = require("body-parser");

const app = express(); 
app.use(bodyParser.urlencoded({extended: false}));

app.get("/bmicalculator", (req, res)=> {
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", (req, res)=> {
    let height = parseFloat(req.body.height);
    let weight = parseFloat(req.body.weight);

    let total =Math.ceil(weight / Math.pow(height, 2) );

    res.send(`Your BMI is ${total}`);
});

const port = process.env.PORT || 2000
app.listen(port, ()=>{
    console.log(`Server is up at ${port}`);
});