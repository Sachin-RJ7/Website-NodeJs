const express = require('express');
const{route} = require('express/lib/application');

const Detail = require("../models/Detail");
const Service = require('../models/Service');
const Slider = require('../models/Slider');
const Contact = require('../models/Contact');

const routes = express.Router();

routes.get('/', async (req, res)=> {
    const details = await Detail.findOne({"_id":"638645a97b3bdc27c0adabfa"})
    const slides = await Slider.find();
    const services = await Service.find();

    res.render('index',{
        details:details,
        slides:slides,
        services:services
    });
});

routes.get('/gallery', async (req, res)=> {
    const details = await Detail.findOne({"_id":"638645a97b3bdc27c0adabfa"})
    res.render('gallery',{
        details:details
    });
});


// process contact form
routes.post('/process-contact-form', async (request,response)=>{
    console.log("form is submitted");
    console.log(request.body);
    // save the data to database.
    try{
        const data = await Contact.create(request.body);
        console.log(data);
        response.redirect('/')
    }
    catch(e){
        console.log(e);
        response.redirect('/')
    }

});



module.exports = routes;