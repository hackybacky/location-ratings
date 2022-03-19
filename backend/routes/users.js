const router = require("express").Router();

const User = require("../models/User");

const bcrypt= require("bcrypt")

router.post("/register", async (req, res) => {
    //const newUser = new User(req.body);
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            email : req.body.email,
            password: hashedPassword,
             username : req.body.username
        })
       const user = await newUser.save();
        res.status(200).json(user._id)
    } catch (err) {
        res.status(500).json(err);
    }
})

//login

router.post("/login", async (req, res) => {
    try {
        const user =await User.findOne({ username: req.body.username });
        if(!user) return res.status(400).json("wrong username or password")

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if(!validPassword )return res.status(400).json("wrong password")

        res.status(200).json({_id:user._id, username : user.username})

    } catch (err) {
        res.status(500).json(err);
    }

})

module.exports = router;
