const express = require('express');
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
   name : {
    type: String,
    required: true
   },
   phone:{
    type: String,
    required: true
   },
   studentClass:{
    type:String,
    required:true
   },
   school:{
    type : String,
    required: true
   },
   address:{
    type: String,
    required:true
   },
   parentName:{
    type :String,
    required: true
   },
     createdAt: {
    type: Date,
    default: Date.now
  }




});
const formData = mongoose.model("formData", formSchema);
module.exports = formData;