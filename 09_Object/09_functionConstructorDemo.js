
console.log(`Function Constructor `);

function College(clgName, year, city, founderName)
{
    this.clgName = clgName
    this.year = year
    this.city = city
 this.founderName = founderName   
}
let coep = new College("COEP Pune", 1970, "Pune", "Yogesh Mask");
console.log(coep);

let mit = new College("mota Pune", 1970, "Pune", "Yogesh Lusk");
console.log(mit);
 


