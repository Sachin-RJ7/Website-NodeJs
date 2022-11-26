// This is our main file....
const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')
const app = express();

const routes = require('./routes/main');

app.use('/static',express.static('public'))
app.use('',routes);

// (template engine)
app.set('view engine', 'hbs')
app.set('views','views')
hbs.registerPartials('views/partials') // setting partials


// Database connection.....
mongoose.connect('mongodb://localhost/website-_nodejs', ()=> {
    console.log('db connected');
    
})


// Now this will not execute because we are using now routes
app.get('/', (request, response) => {
    response.send("This data is from server");
})

// At this port, we are running our server
app.listen(process.env.PORT | 5556,()=> {
    console.log("Server started");
})