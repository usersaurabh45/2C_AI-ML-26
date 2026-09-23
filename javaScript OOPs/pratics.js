class Student {
    static totalstudent = 0;

    constructor(rollNO, name, marks) {
        this.rollNO = rollNO;
        this.name = name;
        this.marks = marks;

        Student.totalstudent++;
    }

    displayresult() {
        console.log(this.rollNO);
        console.log(this.name);
        console.log(this.marks);

        if (this.marks >= 40) {
            console.log("Pass");
        }
        else {
            console.log("Fail");
        }

        console.log("--------");
    }

    static displaytotalstudent() {
        console.log("Total Students:", Student.totalstudent);
    }
}

let s1 = new Student(101, "Saurabh", 75);
let s2 = new Student(102, "Rahul", 35);
let s3 = new Student(103, "Aman", 60);

s1.displayresult();
s2.displayresult();
s3.displayresult();

Student.displaytotalstudent();