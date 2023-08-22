console.log(`----- Assignemnt B ------`);
 console.log(`----- Employee Information ----------`);
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_mahi = new Employee(99 , "Mahesh", "HR", 85000, "Infy");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");

let array = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
array.forEach((element) =>
{
     console.log(element);    
});
console.log(`--------------------------------------------------------------------------------------------------------------------`);
console.log(`1>------- Step:1 Find all the Employees working in TCS and log only employees names and company name -------`);
array.forEach((cmp) => { 
    if (cmp.emp_company == "TCS")
    {
        console.log(`Employees Name :${cmp.emp_name}, Ans Employee Company Name : ${cmp.emp_company}`);
         }
});
 
console.log(`--------------------------------------------------------------------------------------------------------------------`);
console.log(`1>------- Step:2 Find all the Employees Finance Department and log only employees names and department -------`);
array.forEach((department) => { 
    if (department.emp_dept == "Finance")
    {
        console.log(`Employees Name :${department.emp_name}, Ans Employee department : ${department.emp_dept}`);
         }
});
 

 
console.log(`--------------------------------------------------------------------------------------------------------------------`);
console.log(`3>-------Step:3 Find the Employees whose Name starts with "R" and Complet employee details on console -------`);
array.forEach((startsName) => { 
    if (startsName.emp_name.startsWith("R"))
    {
        console.log(`Employees whose Name starts with "R" Complet Details => EmpName : ${startsName.emp_name}, EmpCompany : ${startsName.emp_id}, EmpSalary : ${startsName.emp_salary},  EmpDepartment : ${startsName.emp_company}, EmpID : ${startsName.emp_dept}`);
         }
});
 
console.log(`--------------------------------------------------------------------------------------------------------------------`);
console.log(`3>-------Step:4 Find the Employees whose salary is greter than 75000, and log on console employee name, company, salary -------`);
array.forEach((salaryGreter) => { 
    if (salaryGreter.emp_salary > 75000)
    {
        console.log(`Employees salary greter than 75000 Details=> EmpName : ${salaryGreter.emp_name}, EmpCompany : ${salaryGreter.emp_company}, EmpSalary : ${salaryGreter.emp_salary}`);
         }
});
 


console.log(`--------------------------------------------------------------------------------------------------------------------`);
console.log(`5->-------Step:5 Find the Employees whose salary is greter than or equal 50000 and form IT deaprtMent, and log complete emp details on console-------`);
array.forEach((salaryGreterEqual) => { 
    if (salaryGreterEqual.emp_salary >= 50000)
    {
        console.log(`Employees salary greter than 75000 Details => EmpName : ${salaryGreterEqual.emp_name}, EmpCompany : ${salaryGreterEqual.emp_company}, EmpSalary : ${salaryGreterEqual.emp_salary}, EmpDepartment : ${salaryGreterEqual.emp_dept}, EmpID : ${salaryGreterEqual.emp_id}`);
         }
});
 

console.log(`--------------------------------------------------------------------------------------------------------------------`);
console.log(`5->-------Step:6 Find the all Employees from company "Infy" and log complete employee details on console-------`);
array.forEach((cmpInfy) => { 
    if (cmpInfy.emp_company == "Infy")
    {
        console.log(` Working Employees from company "Infy" => EmpName : ${cmpInfy.emp_name}, EmpCompany : ${cmpInfy.emp_company}, EmpSalary : ${cmpInfy.emp_salary}, EmpDepartment : ${cmpInfy.emp_dept}, EmpID : ${cmpInfy.emp_id}`);
         }
 });