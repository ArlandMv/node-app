const express = require ('express');
const router = express.Router();

// @desc Loggin/Landing page
// @route GET /
router.get('/',(req,res)=>{
    res.render('login',{layout: 'login'});
})

// @desc Dashbboard
// @route GET /dashbboard
router.get('/dashboard',(req,res)=>{
    res.render('dashboard');
})

module.exports = router;
