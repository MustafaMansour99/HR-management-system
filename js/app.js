'use strict';

function Employee(fullName, department, level, imageUrl) {
    this.employeeId = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = 0;
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
  Employee.prototype.generateEmployeeId= function ()
   {
    return (this.employeeId = Number(Math.floor(Math.random() * Date.now()).toString().slice(0,4)));
   };


 Employee.prototype.render = function () {
   // document.write(`Full name: ${this.fullName} //Employee salary: ${this.salary} <br/>`);
   const container = document.getElementById('employee');

   const divEm =document.createElement('div');
   divEm.classList.add('card');
   container.appendChild(divEm);


   const nameEm = document.createElement('h3');
   divEm.appendChild(nameEm);
   nameEm.textContent =`name : ${this.fullName}`;

   const imgEm = document.createElement('img');
   divEm.appendChild(imgEm);
   imgEm.setAttribute('src',this.imageUrl);
   imgEm.width = "150";
   imgEm.height = "150";

   const depEm =document.createElement('p');
   divEm.appendChild(depEm);
   depEm.textContent =`Department: ${this.department}`;

   const levEm =document.createElement('p');
   divEm.appendChild(levEm);
   levEm.textContent = `level: ${this.level}`;

   const salEm =document.createElement('p');
   divEm.appendChild(salEm);
   salEm.textContent =`salary: ${this.salary}`;

   const idEm =document.createElement('p');
   divEm.appendChild(idEm);
   idEm.textContent =`ID: ${this.employeeId}` ;

}
let employeeForm = document.getElementById("addEmployee");
employeeForm.addEventListener('submit', addNewEmployeeHandler);
function addNewEmployeeHandler(event) {
    event.preventDefault();
    console.log(event);

    let fullName = event.target.name.value;
    let department = event.target.Department.value;
    let level = event.target.Level.value;
    let imageUrl = event.target.imgUrl.value;

    let newOne = new Employee(fullName, department, level, imageUrl);
    newOne.calculating();
    newOne.generateEmployeeId();
    newOne.render();

}

  // let employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior","",);
    //let employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior","",);
    //let employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior","",);
    //let employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior","",);
    //let employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior","",);
    //let employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior","",);
   // employee1.calculating();
   /// employee2.calculating();
   // employee3.calculating();
   // employee4.calculating();
   // employee5.calculating();
    //employee6.calculating();
   // employee1.render();
   // employee2.render();
   // employee3.render();
   // employee4.render();
   // employee5.render();
   // employee6.render();
