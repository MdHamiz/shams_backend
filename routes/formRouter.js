const express = require('express');
const formData = require("../models/formData.js");

const router = express.Router();

// ✅ POST -> Save form
router.post("/enroll", async (req, res) => {
    try {
        const { name, phone, studentClass, school, address, parentName } = req.body;

        if (!name || !phone || !studentClass || !school || !address || !parentName) {
            return res.status(400).json({ message: "all field are required" });
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
        res.status(201).json({ message: "Form submitted succesfully!" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "server error" });
    }
});

// ✅ GET -> All forms
router.get("/enroll", async (req, res) => {
    try {
        const forms = await formData.find();
        res.status(200).json({ success: true, data: forms });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error });
    }
});

module.exports = router;
