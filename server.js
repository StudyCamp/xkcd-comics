const express = require("express");  // Import modules
const exphbs  = require('express-handlebars');
const generalController = require('./controllers/GeneralController')
const helpers = require('handlebars-helpers')();
const port = 3000;

const app = express(); 

app.engine('handlebars', exphbs()); // Config express to use handlebars as template engine
app.set('view engine', 'handlebars');

app.use("/",generalController)
app.use(express.static("public"))

app.listen(process.env.PORT || port, () => console.log(`App listening at ${port}`));
