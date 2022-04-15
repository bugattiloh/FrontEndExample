class Employee {

    employeeName;
    personalNumber;

    constructor(employeeName_, personalNumber_) {
        this.employeeName = employeeName_;
        this.personalNumber = personalNumber_;
    }

    showEmployeeInfo() {
        console.log("Name: " + this.employeeName + " Personal number: " + this.personalNumber);
    }
}
var employes = [new Employee("joe", 12), new Employee("john", 13), new Employee("nick", 18)];

for (i = 0; i < employes.length; i++) {
    employes[i].showEmployeeInfo();
}