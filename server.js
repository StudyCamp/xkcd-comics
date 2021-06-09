const express = require("express");  // Import module
const exphbs  = require('express-handlebars');
const generalController = require('./controllers/GeneralController')
const helpers = require('handlebars-helpers')();

const app = express(); // Call as constructor to create Express App Object

// Config express to use handlebars as template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use("/",generalController)

app.use(express.static("public"))

// Create Server Application
const PORT = 3000; 
app.listen(PORT, ()=>{  // 2 Parameters: PORT, callback function
    console.log(`Web Server Application is running and listening on port ${PORT}`);
})
