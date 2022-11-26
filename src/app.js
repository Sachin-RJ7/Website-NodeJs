// This is our main file....
const express = require('express')

const app = express();

const routes = require('./routes/main');

app.use('/static',express.static('public'))
app.use('',routes);

// (template engine)
app.set('view engine', 'hbs')
app.set('views','views')


// Now this will not execute because we are using now routes
app.get('/', (request, response) => {
    response.send("This data is from server");
})

// At this port, we are running our server
app.listen(process.env.PORT | 5556,()=> {
    console.log("Server started");
})