const express = require('express');
const{route} = require('express/lib/application')

const Detail = require("../models/Detail")

const routes = express.Router();

routes.get('/', async (req, res)=> {
    const details = await Detail.findOne({"_id":"638645a97b3bdc27c0adabfa"})
    res.render('index',{
        details:details
    });
});

routes.get('/gallery', async (req, res)=> {
    const details = await Detail.findOne({"_id":"638645a97b3bdc27c0adabfa"})
    res.render('gallery',{
        details:details
    });
});



module.exports = routes;