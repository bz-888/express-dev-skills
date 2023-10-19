const skills = [
    { skillName: "Javascript", experience: "beginner", status: "actively improving" },
    { skillName: "CSS", experience: "beginner", status: "actively improving" },
    { skillName: "HTML", experience: "beginner", status: "actively improving" },
    { skillName: "Python", experience: "beginner", status: "needs re-training" },
    { skillName: "SQL", experience: "beginner", status: "needs re-training" },
];

module.exports = {
    getAll,
    getOne,
    postNew,
}

function getAll() {
    return skills;
}

function getOne(skillName) {
    const skill = skills.find(skill => skillName === skill.skillName);
    console.log(`test: ${skillName}`);
    console.log(`models/skill's skill: ${skill.skillName}`);
    return skill
}

function postNew(newSkill) {
    skills.push(newSkill);
}
