function Account(balance, accountType) {
    this.firstName = "";
    this.lastName = "";
    this.middleName = "";
    this.balance = "";
    this.accountType = "";
    this.status = "";
}

Account.prototype.deposit = function(amount) {
    this.balance += amount;
}

Account.prototype.withdraw = function(amount) {
    this.balance -= amount;
}

let myAccount = new Account(0, "checking");
myAccount.deposit(100);
myAccount.withdraw(50);
console.log(myAccount.balance);