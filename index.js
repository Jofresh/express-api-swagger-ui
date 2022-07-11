const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.static("public"));

const routes = require("./routes");
app.use("/", routes);

const swaggerSetup = require("./swagger-setup");
swaggerSetup(app);

// handling errors
router.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening http://localhost:${port}`);
});
