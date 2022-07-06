if (process.env.NODE_ENV !== 'production')
  require("dotenv").config()

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.sendStatus(401);
  if (token === process.env.SECRET_KEY) next();
  else return res.sendStatus(403);
}

module.exports = verifyToken;

