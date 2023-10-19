var express = require('express');
var router = express.Router();
var skillsCtrl = require("../controllers/skills");

router.get("/", skillsCtrl.index);

// start with a get, because we need to request the webpage for the submission form before we can post anything
router.get("/newSkill", skillsCtrl.new);

// has to be at the bottom as this route is a catch-all
router.get("/:skillName", skillsCtrl.show);

// after the get, we can work on post
router.post("/", skillsCtrl.create);


module.exports = router;