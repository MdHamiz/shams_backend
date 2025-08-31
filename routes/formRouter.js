const express = require('express');
const  formData = require("../models/formData.js");

const router = express.Router();

router.post("/submit-form", async(req,res)=>{
       try{
        const{name,phone,studentClass,school,address,parentName} = req.body;
       


       if( !name || !phone || !studentClass || !school || !address || !parentName){
        return res.status(400).json({message:"all field are required"});
       }
       const newForm = new formData({
        name,
        phone,
        studentClass,
        school,
        address,
        parentName
       });
       await newForm.save();
   res.status(201).json({message : "Form submitted succesfuly!"});

    }   catch(err){
        console.error(err);
        res.status(500).json({message:"server error"});
       }
    


});

module.exports = router;