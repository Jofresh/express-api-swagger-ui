const router = require("express").Router();
const { users } = require("../models");

// middleware
const getUser = (req, res, next) => {
  const user = users.find(({ id }) => id == req.params.id);
  if (user == null)
    return res.status(404).json({ message: "Cannot find user" });
  res.user = user;
  next();
};

/**
 * @swagger
 * /users:
 *  get:
 *    description: Liste des utilisateurs
 *    responses:
 *      '200':
 *        description: Utilisateurs récupérés avec succès
 */
router.get("/", (req, res) => res.json(users));

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id de l'utilisateur
 *        required: true
 *        type: integer
 *    description: Récupérer un utilisateur par id
 *    responses:
 *      '200':
 *        description: Utilisateur récupéré avec succès
 */
router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});

module.exports = router;
