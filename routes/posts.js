const router = require("express").Router();
const { posts } = require("../models");

// middleware
const getPost = (req, res, next) => {
  const post = posts.find(({ id }) => id == req.params.id);
  if (post == null)
    return res.status(404).json({ message: "Cannot find post" });
  res.post = post;
  next();
};

/**
 * @swagger
 * /posts:
 *  get:
 *    description: Liste des postes
 *    responses:
 *      '200':
 *        description: Posts récupérés avec succès
 */
router.get("/", (req, res) => res.json(posts));

/**
 * @swagger
 * /posts/{id}:
 *  get:
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id du post
 *        required: true
 *        type: integer
 *    description: Récupérer un post par id
 *    responses:
 *      '200':
 *        description: Post récupéré avec succès
 */
router.get("/:id", getPost, (req, res) => res.json(res.post));

module.exports = router;
