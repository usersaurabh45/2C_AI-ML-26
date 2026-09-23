class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    calculateSalary() {
        return this.salary;
    }
}

class Manager extends Employee {
    constructor(id, name, salary, incentive) {
        super(id, name, salary);
        this.incentive = incentive;
    }

    calculateSalary() {
        return this.salary + this.incentive;
    }
}

let e = new Employee(101, "Saurabh", 30000);
let m = new Manager(102, "Rahul", 40000, 10000);

console.log(e.calculateSalary());
console.log(m.calculateSalary());