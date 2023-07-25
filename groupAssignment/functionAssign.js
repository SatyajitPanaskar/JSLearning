

var str = function () {
    
   
    console.log(`total character in given string=>${result}`);
    console.log(`charcter of index 6=>${result1}`);
    console.log(`words of the given string =>${word}`);
    console.log(`First character of given string =>${result3}`);
    console.log(` third non of character is => ${result4}`);
    console.log(`square of words ${result5}`);

}
var str1 = "Js the most popular";
var result = str1.length;
var result1 = str1.charAt(7);
var result2 = str1.split(" ");
var word = result2.length;
var result5 = word * word;
var result3 = str1.charAt(0);
var result4 = str1.charAt(result-3);

str();
