// Dev only
const router = require("express").Router();
const usersRouter = require("./users");
const postsRouter = require("./posts");

const verifyToken = require("../middleware/auth")

router.get("/", (req, res) => res.redirect("/api-docs")); //res.sendFile(`${__dirname}/index.html`));

router.use("/users", verifyToken, usersRouter);
router.use("/posts", verifyToken, postsRouter);

module.exports = router;
