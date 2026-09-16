class Student {

    constructor(name) {
        this.Name = name;
    }

    static display() {
        console.log("Student");
    }
}

let s2 = new Student("Saurabh");

Student.display();