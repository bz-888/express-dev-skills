const skills = [
    { language: "Javascript", experience: "beginner", status: "actively improving" },
    { language: "CSS", experience: "beginner", status: "actively improving" },
    { language: "HTML", experience: "beginner", status: "actively improving" },
    { language: "Python", experience: "beginner", status: "needs re-training" },
    { language: "SQL", experience: "beginner", status: "needs re-training" },
];

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills;
}

function getOne(language) {
    const skill = skills.find(skill => language === skill.language);
    console.log(`test: ${language}`);
    console.log(`models/skill's skill: ${skill.language}`);
    return skill
}