const router = require("express").Router();
const usersRouter = require("./users");

router.get("/", (req, res) => {
  console.log("Redirecting...");
  res.redirect("/api-docs");
}); //res.sendFile(`${__dirname}/index.html`));

router.use("/users", usersRouter);

module.exports = router;
