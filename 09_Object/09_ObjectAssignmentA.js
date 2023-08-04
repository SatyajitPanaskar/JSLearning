console.log(`------Assignment 01------`);

let professor = {
    name: "Parth Gurval",
    profClgName:'SGM college Karad',
    profEduction: "Msc",
    profContact: 234567865,
    department: "Chemistry",
    profAge: 34,
    teachingSubject: "organic Chemisty",
    profDegrees: {
        engineering: 'CSC computer',
        phd: 'Adv computing',
        specialSubjects: "Math",
        teachingExperience: '8 Year',
        teacherDegrees: function () {
            console.log(`Professor Degrees: ${this.engineering}, ${this.phd}, ${this.specialSubjects}`);
        }
    },
    certificates: ['Hacker Rank Participation', 'Certificates in IFE course',
        'certificates in Adv Programming']
    
}
professor.profDegrees.teacherDegrees();
console.log(`----------------------------------------------------------`);
let addExperience = professor.totalExperience = "14 years";
console.log(addExperience);
console.log(professor);
console.log(`-----------------------------------------------------------`);
console.log(`orginal values is: "${professor.department}"`);
let update = professor.department = 'Biology';
console.log(`after change the value department: "${professor.department}"`);
console.log(`-----------------------------------------------------------`);
let addCertificates = professor.certificates.push('Oracle Certified');
console.log(`Add one new Certificate: "${professor.certificates}"`);
console.log(`------------------------------------------------------`);
console.log(`last element array is : `,professor.certificates.slice(-1)[0]);
