'use strict';

function Employee(employeeId, fullName, department, level, imageUrl, salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;
}
Employee.prototype.calculating = function () {
    switch (this.level) {
        case "Senior":
             this.salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
             break;
        case "Mid-Senior":
             this.salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
             break;
        case "Junior":
             this.salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
             break;
        default:
            return 0;
    }
    return this.salary - (this.salary * 0.075);
}
Employee.prototype.render = function () {
        //console.log(`fullname :${this.fullName}  employee salary: ${this.salary}`);
       // document.getElementById("node").innerHTML=(`Full name: ${this.fullName} employee salary: ${this.salary}`);
        document.write(`Full name: ${this.fullName} //Employee salary: ${this.salary} <br/>`);}
 
    let employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior","",);
    let employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior","",);
    let employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior","",);
    let employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior","",);
    let employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior","",);
    let employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior","",);
    employee1.calculating();
    employee2.calculating();
    employee3.calculating();
    employee4.calculating();
    employee5.calculating();
    employee6.calculating();
    employee1.render();
    employee2.render();
    employee3.render();
    employee4.render();
    employee5.render();
    employee6.render();
