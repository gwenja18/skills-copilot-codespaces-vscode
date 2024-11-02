function skillsMember() {
    var member = {
        name: "John Doe",
        age: 24,
        skills: ["JavaScript", "HTML", "CSS"],
        details: function() {
            console.log(this.name + " is " + this.age + " years old.");
            console.log(this.name + " knows " + this.skills.join(", "));
        }
    };
    return member;
}