const express = require("express");
const app = express();
const hbs = require("hbs");
app.use(express.static(__dirname + "/public"));



app.get("/",(req,res,next) => {
    res.render("home.hbs", {
        css : ["style.css"],
    });
});


app.get("/work", (req, res, next) => {
    res.render("work.hbs", {
        css: ["work.css"]
    })
});

app.get("/about", (req, res, next) => {
    res.render("about.hbs", {
        css: ["about.css"],
        img:["fish.jpg"]
    })
}); 


app.listen(5000, ()=>{
    console.log(`App listening http://localhost:5000`)
;})