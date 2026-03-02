const router = require("express").Router();
const auth = require("../controllers/authController");

router.post("/register", auth.register);
router.post("/login", auth.login);

module.exports = router;




// const express = require("express");
// const router = express.Router();
// const authController = require("../controllers/authController");

// router.get("/login", authController.login);

// module.exports = router;





// const router = require("express").Router();
// const authController = require("../controller/authController");

// router.post("/register", authController.register);
// router.post("/login", authController.login);

// module.exports = router;