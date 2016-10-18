const express = require('express');
const router  = express.Router();

router.get('/',(req,res)=>{
  res.render('index',{
    title:'Coffee-Shop'
  });
});

router.get('/contact',(req,res)=>{
  res.render('contact',{
    title:'Contactanos'
  })
});

module.exports = router;
