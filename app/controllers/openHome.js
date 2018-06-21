var express = require('express');
var router = express.Router();
const path="../views/index"
class openHomeController{
    static getHome(req,res)
    {
        console.log("inside openHome Controller");
        res.render('index');
    }
}

module.exports=openHomeController;