const router = require("express").Router();
const usersRouter = require("./users");
const postsRouter = require("./posts");

router.get("/", (req, res) => res.redirect("/api-docs"));

router.use("/users", usersRouter);
router.use("/posts", postsRouter);

module.exports = router;
