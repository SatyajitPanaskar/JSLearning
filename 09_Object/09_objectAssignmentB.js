console.log(`-------------Assignment 02 --------------`);
console.log(`-------------------------- Step-01 ---------------------------------------------`);
let sbiBank = {
    bankName: "SBI Bank",
    location: "Pune",
    accountNo: 6476574885,
    ifsc: "SBIN875485858",
    interestrate: 5.6,
    showDetails: function () {
        console.log(`Bank Details : Bank Name:${this.bankName}, A/C.No:${this.accountNo}, IFSCode:${this.ifsc}, Interestrate : ${this.interestrate}, Location : ${this.location}`);
    }
}
sbiBank.showDetails(sbiBank);


console.log(`-------------------------- Step-02 ---------------------------------------------`);
let axisBank = {
    bankName: "AXIS Bank",
    location: "Baner Pune",
    accountNo: 6474747445,
    ifsc: "AXISN875485858",
    interestrate: 6.7,
    showDetails: function () {
        console.log(`Bank Details : Bank Name:${this.bankName}, A/C.No:${this.accountNo}, IFSCode:${this.ifsc}, Interestrate : ${this.interestrate}, Location : ${this.location}`);
    }
}
axisBank.showDetails(axisBank);



console.log(`-------------------------- Step-03 ---------------------------------------------`);
let hdfcBank = {
    bankName: "HDFC Bank",
    location: "Karad",
    accountNo: 6471222345,
    ifsc: "HDFC875485858",
    interestrate: 7.6,
    showDetails: function () {
        console.log(`Bank Details : Bank Name:${this.bankName}, A/C.No:${this.accountNo}, IFSCode:${this.ifsc}, Interestrate : ${this.interestrate}, Location : ${this.location}`);
    }
}
hdfcBank.showDetails(hdfcBank);



console.log(`-------------------------- Step-04 ---------------------------------------------`);
let yesBank = {
    bankName: "YES Bank",
    location: "Mubai",
    accountNo: 647474485,
    ifsc: "YESN875485858",
    interestrate: 6.6,
    showDetails: function () {
        console.log(`Bank Details : Bank Name:${this.bankName}, A/C.No:${this.accountNo}, IFSCode:${this.ifsc}, Interestrate : ${this.interestrate}, Location : ${this.location}`);
    }
}
yesBank.showDetails(yesBank);
