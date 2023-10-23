function skillsMember() {
    this.skills = ['HTML', 'CSS', 'JS'];
    this.addSkill = function (skill) {
        this.skills.push(skill);
    };
    this.removeSkill = function (skill) {
        this.skills = this.skills.filter(function (item) {
            return item !== skill;
        });
    };
}