console.log(`-------------------------Assignment 1-------------------`);
function stringBasics() {
  console.log(`My Dream Company Name => ${str}`);
  console.log(`My hobbies are || ${hobby1} || ${hobby2}|| ${hobby3}`);
  console.log(`Sum The total Number Of Characters in hobby => ${result} `);
}
var str = "XYZ private Company LTD";
var hobby1 = "Web Design";
var hobby2 = "Playing Cricket";
var hobby3 = "Photography";
var join = hobby1 + hobby2 + hobby3;
var result = hobby1.length + hobby2.length + hobby3.length - 2;
stringBasics();

console.log(
  `-------------------------Assignment#2 StringHandsOn.js -------------------`
);
console.log(`-------------------------Step 1-------------------`);
function stringHandsOn() {
  console.log(`Priting the given String => ${str}`);
  console.log(`-------------------------Step 2-------------------`);
  console.log(`Length Of String => ${lengthOfString}`);
  console.log(`-------------------------Step 3-------------------`);
  console.log(
    ` Before trim String length => ${lengthOfString} Remove Spaces And Length of String => ${lengthRemoveSpaces}`
  );
  console.log(`-------------------------Step 4-------------------`);
  console.log(`Total No of Extra spaces => ${result}`);
  console.log(`-------------------------Step 5-------------------`);
  console.log(`After trim the First character => ${Character} || Last character => ${Character1}`);
  console.log(`-------------------------Step 6-------------------`);
  console.log(`given String => ${removeSpace}`);
  console.log(`Total words In the String => ${word}`);
  console.log(`-------------------------Step 7-------------------`);
  console.log(`index of word "good" from the string => ${result4}`);
  console.log(`-------------------------Step 8-------------------`);
  console.log(`Substring Starting from index 22 => ${result5}`);
  console.log(`-------------------------Step 9-------------------`);
  console.log(`String end with word "up" => ${result6}`);
  console.log(`-------------------------Step 10-------------------`);
  console.log(`String start with word "Hey" => ${result7}`);
  console.log(`Length OF String is => ${lengthOfString}`);
}
var str = "     Hey you are doing good, keep it up     ";

var lengthOfString = str.length;

var removeSpace = str.trim();
var lengthRemoveSpaces = removeSpace.length;

var space1 = str.slice(0, 5);
var space2 = str.slice(39, 44);
var result = space1.length + space2.length;

var Character = removeSpace.charAt(0);
var Character1 = removeSpace.charAt(33);

var result3 = removeSpace.split(" ");
var word = result3.length;

var result4 = removeSpace.indexOf("good");

var result5 = removeSpace.slice(22, 34);
var result6 = removeSpace.endsWith("up");
var result7 = removeSpace.startsWith("Hey");
stringHandsOn();
