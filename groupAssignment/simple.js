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

let array = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_mahi, emp_viny];
array.forEach((element)=> {
    console.log(element);
});

console.log(`----------------------------------------------------------------`);
// array.forEach((company) => {
//     if (company.emp_company == "TCS")
//     {
//         console.log(`Employee Details : ${company.emp_name} , ${company.emp_company}`);
//         }
    
// });

for (const element1 in array) {
    const tcsEmp = array[element1];
    if (tcsEmp.emp_company == "TCS")
    {
        console.log(`Employee Details : ${tcsEmp.emp_name} , ${tcsEmp.emp_company}`);
        }
    
}

for (const element2 in array) {
    const department = array[element2];
    if (department.emp_dept == "Finance")
    {
        console.log(`Employee Details : ${department.emp_name} , ${department.emp_dept}`);
        }
    
}


for (const element2 in array) {
    const department = array[element2];
    if (department.emp_name.startsWith("R"))
    {
        console.log(`Employee Details : ${department.emp_name} , ${department.emp_dept}`);
        }
    
}

for (const element of array)
{
    if (element.emp_salary > 75000)
    {
        console.log(`Employee Details : ${element.emp_name} , ${element.emp_salary}`);
        }
}


for (const element of array)
{
    if (element.emp_salary >= 50000 && element.emp_dept=="IT")
    {
        console.log(`Employee Details : ${element.emp_name} , ${element.emp_salary} , ${element.emp_dept}`);
        }
}


for (const element of array)
{
    if (element.emp_company == "Infy")
    {
        console.log(`Employee Details : ${element.emp_name} , ${element.emp_salary} , ${element.emp_dept}, ${element.emp_company}`);
        }
}