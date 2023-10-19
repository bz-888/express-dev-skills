const Skill = require("../models/skill");

module.exports = {
    index,
    show,
    new: newSkill,
    create,
}

function index(req, res) {
    const skillData = Skill.getAll()
    res.render("skills/index", {
        skills: skillData
    });
}

function show(req, res) {
    const skill = Skill.getOne(req.params.skillName)
    console.log(`controllers/skills's skillName: ${skill.skillName}`);
    res.render("skills/show", {
        skill: skill,
    });
}

function newSkill(req, res) {
    res.render("skills/newSkill");
}

function create(req, res) {
    // console.log(req.body);
    Skill.postNew(req.body);
    res.redirect("/skills");
}