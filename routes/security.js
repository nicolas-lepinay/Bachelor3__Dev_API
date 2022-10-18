const router = require("express").Router();
const securityController = require("../controllers/security.js");

router.post("/", securityController.login);       // LOGIN A USER

module.exports = router