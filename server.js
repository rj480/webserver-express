const express = require("express");
const app = express();
const hbs = require("hbs");
require('./hbs/helpers')

const port = process.env.PORT || 3000
app.use(express.static(__dirname +'/public'))
//Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set("view engine", "hbs");
//Helpers

//Home
app.get("/",  (req, res) => {

  res.render('home',{
      nombre:'Roberto jose'
  });
});

//about 

app.get("/about", (req, res) => {
  res.render("about",{
      img:'/assets/img/img-noDisponible.png'
  });
});

app.listen(port);
