
'use strict';
let arr = [];
function getEmployees() {
    let jsonArr = localStorage.getItem("allPepole");
    arr = JSON.parse(jsonArr);
}
getEmployees();

function totalSalary(arr){
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].salary;
    }
    return sum;
}
function avargeSalary(arr){
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].salary;
    }
    return sum/arr.length;

}




function render(){
    const cont = document.getElementById('account');
    cont.innerHTML = '';
    if(arr == null)
    {
        arr=[];
    }
    //the main table
    const table =document.createElement("table");
    cont.appendChild(table);
    table.setAttribute("border","3");
    table.setAttribute("width","100%");
    //table contant (tr):
    const tr = document.createElement("tr");
    table.appendChild(tr);
    //th1
    const th1 =document.createElement("th");
    tr.appendChild(th1);
    th1.textContent="Department";
   //th2
   const th2 =document.createElement("th");
   tr.appendChild(th2);
   th2.textContent="Number of employees";
    //th3
    const th3 =document.createElement("th");
    tr.appendChild(th3);
    th3.textContent="Average salary of the department";
    //th4
    const th4 =document.createElement("th");
    tr.appendChild(th4);
    th4.textContent="Total salary Where average salary";

    // new tr for the td :
    const tr2 = document.createElement("tr");
    table.appendChild(tr2);
    //td for adminsatore
    const td1 =document.createElement("td");
    tr2.appendChild(td1);
    td1.textContent="Administration";
    let newArr = arr.filter(e => e.department ==="Administration");
    

    const tda =document.createElement("td");
    tr2.appendChild(tda);
    tda.textContent = newArr.length;

    const tda2 =document.createElement("td");
    tr2.appendChild(tda2);
    tda2.textContent = avargeSalary(newArr);

    const tda3 =document.createElement("td");
    tr2.appendChild(tda3);
    tda3.textContent =totalSalary(newArr);


    //new tr for marketing
    const tr3 = document.createElement("tr");
    table.appendChild(tr3);
    //td
    const td2 =document.createElement("td");
    tr3.appendChild(td2);
    td2.textContent="Marketing";
    let newArr2 = arr.filter(e => e.department ==="Marketing");


    const tdm =document.createElement("td");
    tr3.appendChild(tdm);
    tdm.textContent = newArr2.length;


    const tdm2 =document.createElement("td");
    tr3.appendChild(tdm2);
    tdm2.textContent =avargeSalary(newArr2);

    const tdm3 =document.createElement("td");
    tr3.appendChild(tdm3);
    tdm3.textContent =totalSalary(newArr2);


    //new tr for development
    const tr4 = document.createElement("tr");
    table.appendChild(tr4);
    //td
    const td3 =document.createElement("td");
    tr4.appendChild(td3);
    td3.textContent="Development";

    let newArr3 = arr.filter(e => e.department ==="Development");


    const tdd =document.createElement("td");
    tr4.appendChild(tdd);
    tdd.textContent =newArr3.length;

    const tdd2 =document.createElement("td");
    tr4.appendChild(tdd2);
    tdd2.textContent =avargeSalary(newArr3);

    const tdd3 =document.createElement("td");
    tr4.appendChild(tdd3);
    tdd3.textContent =totalSalary(newArr3);


    //new tr for Finance
    const tr5 = document.createElement("tr");
    table.appendChild(tr5);
    //td
    const td4 =document.createElement("td");
    tr5.appendChild(td4);
    td4.textContent="Finance";
    let newArr4 = arr.filter(e => e.department ==="Finance");

    const tdf =document.createElement("td");
    tr5.appendChild(tdf);
    tdf.textContent = newArr4.length;

    const tdf2 =document.createElement("td");
    tr5.appendChild(tdf2);
    tdf2.textContent = avargeSalary(newArr4);

    const tdf3 =document.createElement("td");
    tr5.appendChild(tdf3);
    tdf3.textContent =totalSalary(newArr4);

    //new tr for total:
    const tr6 = document.createElement("tr");
    table.appendChild(tr6);
    //td
    const td5 =document.createElement("td");
    tr6.appendChild(td5);
    td5.textContent="Total";

    const tdt =document.createElement("td");
    tr6.appendChild(tdt);
    tdt.textContent=arr.length;

    const tdt2 =document.createElement("td");
    tr6.appendChild(tdt2);
    tdt2.textContent = avargeSalary(arr);

    const tdt3 =document.createElement("td");
    tr6.appendChild(tdt3);
    tdt3.textContent = totalSalary(arr);









}
render();