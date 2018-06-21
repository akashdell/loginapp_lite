const express = require("express");
const validationMiddleWare = require("../validations/validation");
const UserController = require("../controllers/users");
const initUsers=(passport)=>{
  const userRouter=express.Router();
  userRouter.get('/register',UserController.showRegisterDetails);
  userRouter.get('/login',UserController.showLoginDetails);
  userRouter.get('/logout',UserController.logOutUser);
  userRouter.post('/register', UserController.insertRegisterDetails);
  userRouter.post('/login',UserController.insertLoginDetails);
   return userRouter;
  }
 module.exports= initUsers; 


//userRouter.post('/register',validationMiddleWare.validateDetails, UserController.insertRegisterDetails);
// var express = require('express');
// var router = express.Router();
// //Register
// router.get('/register',function(req,res){
//     res.render('register');

// })
// //Login
// router.get('/login',function(req,res){
//     res.render('login');
// })
// module.exports=router;