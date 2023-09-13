
class College {
    constructor(collegeName, address, pincode, phoneNo, typeOfCollege, academicStaff) {
        this.collegeName = collegeName
        this.address = address
        this.pincode = pincode
        this.phoneNo = phoneNo
        this.typeOfCollege = typeOfCollege
        this.academicStaff = academicStaff
    }
}
let college1 = new College("C.O.E.P College", "Shivajinagar, Pune, Maharashtra", "411005","6564 6484 76", "Government College", 30);
let college2 = new College("C.O.E.P College", "Shivajinagar, Pune, Maharashtra", "411005","6564 6484 76", "Government College", 30);
let college3 = new College("C.O.E.P College", "Shivajinagar, Pune, Maharashtra", "411005","6564 6484 76", "Government College", 30);


function traverseObject(collegeObj)
{
    for (const college in collegeObj) {
        if (Object.hasOwnProperty.call(collegeObj, college)) {
            const element = collegeObj[college];
            console.log(`${college} ==> ${element}`);
        }
    }
    console.log(`-------------------------------------------------------`);
}
traverseObject(college1);
//console.log(`-------------------------------------------------------`);
traverseObject(college2);
traverseObject(college3);