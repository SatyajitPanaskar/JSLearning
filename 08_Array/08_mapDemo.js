console.log(`----------Map Demo ----------`);

let array = [11, "6ft", "SP", "MH", false, false];
console.log(array);

let map = new Map();
map.set("RollNo", 11);
map.set("height", "6ft");
map.set("Name", "SP");
map.set("state", "MH");
map.set("isMarried", false);
map.set("haveKid", false);
map.set("skills", ['react', 'angular', 'java', 'corejava', 'c++', "cicd"]);
//console.log(map);
//console.table(map);

console.log(`-------size map -------`);
console.log(map.size);
console.log(`-----------------------------------------------------------------------------`);
console.log(`------get - get method are used to give the value-----`);
let stateValue = map.get("state");
console.log(`Return the value state:`, stateValue);
console.log(`--------------------------`);
let sikllValue = map.get("skills");
console.log(`return the value skill :`, sikllValue);
console.log(`---------- using for of loop  ---------------`);
for (const skills of sikllValue)
{
    console.log(skills);
    
}
console.log(`-----------------------------------------------------------------------------`);
console.log(`has method are used to check the key present or not`);
let isHeightKeyAvilable = map.has("heigth");
console.log(`height is avilable:`, isHeightKeyAvilable);

console.log(`-----------------------------------------------------------------------------`);
console.log(`-----delete method are used to delete the key and value`);
map.delete("haveKid");

console.table(map);

console.log(`--------------------------------------------------------------`);
console.log(`-------Traversing map-----`);
let keys = map.keys();
for (const key of keys)
{
   console.log(`${key},=>${map.get(key)}`);    
}