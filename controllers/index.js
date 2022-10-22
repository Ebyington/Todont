
const router = require("express").Router();
// const taskRoutes = require('./taskRoutes');
const userRoutes = require('./userRoutes')

// router.use("/task", taskRoutes);

router.use("/user", userRoutes);


// router.get("/index", (req, res) => {
//     res.json("huehuehue");
// });

module.exports = router;