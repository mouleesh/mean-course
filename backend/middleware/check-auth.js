const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "some_random_secret_string");
    next();
  } catch (error) {
    res.send(401).json({
      message: "Auth Failed"
    });
  }
};
