class BankAccount {
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance)
            this.balance -= amount;
        else
            console.log("Insufficient Balance");
    }

    displayBalance() {
        console.log(this.accountNo, this.holderName, this.balance);
    }

    static bankInfo() {
        console.log("ABC Bank - Safe Banking");
    }
}

let a1 = new BankAccount(101, "Saurabh", 5000);
let a2 = new BankAccount(102, "Rahul", 3000);

a1.deposit(1000);
a1.withdraw(2000);
a1.displayBalance();

a2.deposit(500);
a2.withdraw(4000);
a2.displayBalance();

BankAccount.bankInfo();