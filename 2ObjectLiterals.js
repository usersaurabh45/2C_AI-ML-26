let name = "Saurabh";
let Roll = 101;

let student = {
    name,
    Roll,

    display() {
        console.log(this.name, this.Roll);
    }
};

student.display();