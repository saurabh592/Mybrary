const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();


router.get('/',(req,res) =>{
    res.render('index.ejs');
})

module.exports = router;