const Skill = require("../models/skill");

module.exports = {
    index,
    show
}

function index(req, res) {
    const skillData = Skill.getAll()
    res.render("skills/index", {
        skills: skillData
    });
}

function show(req, res) {
    const skill = Skill.getOne(req.params.language)
    console.log(`controllers/skills's language: ${skill.language}`);
    res.render("skills/show", {
        selectedLanguage: skill,
    });
}
