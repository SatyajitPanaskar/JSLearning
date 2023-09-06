
console.log(` ----------- using map method ---------------`);
const array = [1, 2, 3, 4, 5];

const arrayOfSqure = array.map((element) => {
    return element * element;
});
console.log(arrayOfSqure);
console.log(`--------------------------------------------------`);

console.log(`-------Assignment A : map() ----------------------`);

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log("Orignal Array ==> ", arrayNumbers);

console.log(`1>----- Add 10 into each elemnt and  log new array result on console --`);

const resultAdd_10 = arrayNumbers.map((element) => {
    return element * 10;

});

console.log(resultAdd_10);

console.log(`-----------------------------------------------------------------------------`);

console.log(`2>------Cube the each element and log on console`);

const cubeElement = arrayNumbers.map((element) => {
    return element * element * element;
});
console.log(cubeElement);

console.log(`-----------------------------------------------------------------------------`);
console.log(`3>-- add the index value into its corresponding each array element and log new array result on console---`);

const addElement = arrayNumbers.map((element, index) => {
    return element + index;
});
console.log(addElement);

console.log(`---Step.2--- AssignmentB:  map()  ------   `);

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log(`25_mapMethodAssignmentB : ---------------`);
const emp_info = [emp_anil, emp_mahi, emp_monika, emp_radha, emp_rishi, emp_sonali, emp_vinayak];
console.log(`1>---- Get the list of all employee names and log new array on console ----`);
const emp_table = emp_info.map((element) => {
    return element.emp_name;
});
console.log(emp_table);
console.log(`-----------------------------------------------------------------------------`);
console.log(`2>-- Get the list of depertment and log on console----`);
const emp_dept = emp_info.map((element) => {
    return element.emp_dept;
});
console.log(emp_dept);
console.log(`-----------------------------------------------------------------------------`);
console.log(`3>--- Get the list of employee id's and log on console`);
const emp_id = emp_info.map((element) => {
    return element.emp_id;

});

console.log(emp_id);
