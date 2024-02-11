const express = require("express");

const router = express.Router();
const URLController = require("../controller/urlContoller");
router.post("/URL", URLController.generateNewShortURL);
router.get("/:id", URLController.redirectURL);
router.get("/URL/analytics/:id", URLController.checkingTheURLHit);

module.exports = router;
