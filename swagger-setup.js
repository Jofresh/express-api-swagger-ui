const swaggerDefinition = {
  info: {
    title: "Exemple d'API REST avec Express & Swagger",
    description: "",
  },
  servers: ["http://localhost:8080"],
};

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

/**
 * Configure Swagger UI pour l'application Express.
 * @param {express} app Application express
 */
const setup = (app) =>
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerJsDoc(swaggerOptions))
  );

module.exports = setup;
