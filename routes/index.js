// Dev only
const router = require("express").Router();
const usersRouter = require("./users");
const postsRouter = require("./posts");

router.get("/", (req, res) => res.redirect("/api-docs")); //res.sendFile(`${__dirname}/index.html`));

router.use("/users", usersRouter);
router.use("/posts", postsRouter);

module.exports = router;
