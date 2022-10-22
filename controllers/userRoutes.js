const router = require("express").Router();

const { User } = require("../models");

router.get("/", (req, res) => {
    res.json("blahhhhhh")
    try {
        const userData = await User.findAll({
            include: [{ model: Task }],
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json({ msg: "wow you did it", userData });  
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router