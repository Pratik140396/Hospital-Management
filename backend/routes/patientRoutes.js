const router = require("express").Router();
const patientController = require("../controllers/patientController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", verifyToken, patientController.addPatient);
router.get("/", verifyToken, patientController.getPatients);

module.exports = router;

