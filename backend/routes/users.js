const router = require("express").Router();
const { response } = require("express");
const User = require("../models/User");

router.post("/register", (req, res) => {
    const newUser = new User(req.body);
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
