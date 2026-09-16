
class Student {

    constructor(name) {
        this.Name = name;
        console.log(this.Name);
    }

    info() {
        console.log("student information");
        console.log(this.Name);
    }

    display() {
        console.log("Student Display");
    }
}

let student1 = new Student("Saurabh");

student1.info();
student1.display();
