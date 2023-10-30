// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var driver = "Jyotiranjan";
console.log("The driver's name is", driver);
var navigator = "Megha";
console.log("The navigator's name is", navigator);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

function checkLength(string) {
  var count1 = 0;
  var count2 = 0;
  for (let i = 0; string[i] !== undefined; i++) {
    count1++;
  }
  for (let i = 0; string[i] !== undefined; i++) {
    count2++;
  }
  if (count1 > count2) {
    console.log(
      "The driver has the longest name, it has",
      count1,
      "characters."
    );
  } else if (count1 < count2) {
    console.log(
      "It seems that the driver has the longest name, it has",
      count2,
      "characters."
    );
  } else {
    console.log(
      "Wow, you both have equally long names,",
      count1,
      "characters!."
    );
  }
}
checkLength(driver)
checkLength(navigator)

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.

function checkVowels(string) {
  var vowel = "";
  var index = "";
  var check = false;
  for (let i = 0; string[i] !== undefined; i++) {
    if (
      string[i] == "a" ||
      string[i] == "e" ||
      string[i] == "i" ||
      string[i] == "o" ||
      string[i] == "u"
    ) {
      vowel += string[i] + " ";
      index += `${i}` + " ";
      check = true;
    }
  }
  if (check == true) {
    console.log(string, vowel, index);
  } else {
    console.log("no vowels");
  }
}
checkVowels(driver);
checkVowels(navigator);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function checkLowerUpper(string) {
  let upperCase = 0;
  let lowerCase = 0;
  for (let i = 0; string[i] !== undefined; i++) {
    if (string[i] >= "A" && string[i] < "a") {
      upperCase++;
    } else if (string[i] >= "a") {
      lowerCase++;
    }
  }
  console.log("Number of Uppercase Characters used is", upperCase);
  console.log("Number of Lowercase Characters used is", lowerCase);
}
checkLowerUpper(driver);
checkLowerUpper(navigator);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

function upperSpace(string) {
  let newString = ""
  for (let i = 0; string[i] !== undefined; i++){
    if (string[i] >= "A" && string[i] < "a"){
      newString+=string[i]+" "
    }
    else{
      newString+=String.fromCharCode(string.charCodeAt(i)-32)+" "
    }
  }
  console.log(newString);
}
upperSpace(driver)


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

function reverseString(string) {
  let index = 0
  for (let i = 0; string[i]!== undefined; i++) {
    index = i
  }
  let newString = ""
  for (let i = index; i >=0; i--){
    newString+=string[i]
  }
  console.log(newString);
}
reverseString(navigator)

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

function merge(string1,string2){
  let newstring = ""
  newstring = string1 + " " +  string2
  console.log(newstring);
}
merge(driver,navigator)
merge(navigator,driver)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

function lexicographic(string1,string2) {
  let result = ""
  let newString1 = ""
  let newString2 = ""
  for (let i = 0; string1[i] !== undefined; i++){
    if (string1[i] >= "A" && string1[i] < "a"){
      newString1+=string1[i]
    }
    else{
      newString1+=String.fromCharCode(string1.charCodeAt(i)-32)
    }
  }
  for (let i = 0; string2[i] !== undefined; i++){
    if (string2[i] >= "A" && string2[i] < "a"){
      newString2+=string2[i]
    }
    else{
      newString2+=String.fromCharCode(string2.charCodeAt(i)-32)
    }
  }
  
  for (let i = 0; newString1[i] !== undefined||newString2[i] !== undefined; i++) {
    if (newString1[i]>newString2[i]) {
      result = `The ${string1}'s name goes first.`
      break
    }else if(newString1[i]<newString2[i]) {
      result = `Yo, the ${string2} goes first definitely.`
      break
    }else {
      result = `What?! You both have the same name?`
    }
  }

  console.log(result);
  
}
lexicographic(driver,navigator)
lexicographic(navigator,driver)


// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu augue ut. Auctor eu augue ut lectus arcu bibendum at varius vel. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Augue ut lectus arcu bibendum at varius vel pharetra. Sagittis id consectetur purus ut. Fringilla est ullamcorper eget nulla facilisi. Nibh ipsum consequat nisl vel pretium lectus. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Eget nunc lobortis mattis aliquam faucibus purus.\n\n"
+
"Est placerat in egestas erat imperdiet sed euismod. Ultrices sagittis orci a scelerisque. Amet dictum sit amet justo donec enim diam. Erat pellentesque adipiscing commodo elit at imperdiet. Cursus risus at ultrices mi tempus imperdiet nulla. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Amet mattis vulputate enim nulla. Sed cras ornare arcu dui vivamus arcu. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Vitae aliquet nec ullamcorper sit amet risus nullam. Luctus accumsan tortor posuere ac ut consequat semper. Quisque id diam vel quam elementum pulvinar etiam non. Vitae turpis massa sed elementum tempus egestas sed sed risus. Purus sit amet volutpat consequat mauris nunc. Suspendisse potenti nullam ac tortor vitae purus faucibus. Turpis massa sed elementum tempus egestas sed sed risus. Nisi quis eleifend quam adipiscing vitae proin. Mi bibendum neque egestas congue quisque egestas diam in. Quisque egestas diam in arcu.\n\n"
+
"Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Libero volutpat sed cras ornare arcu dui. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Condimentum id venenatis a condimentum. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Ullamcorper sit amet risus nullam eget felis. Et netus et malesuada fames. Lacus viverra vitae congue eu consequat ac felis. Interdum velit laoreet id donec ultrices. Hendrerit gravida rutrum quisque non tellus orci. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo."


// Make your program count the number of words in the string.

function countWords(string) {
  let words = 1
  for (let i = 0; string[i] !== undefined; i++) {
    if(string[i]==" "){
      words++
    }
  }
  return words
}
console.log(countWords(lorem));

// Make your program count the number of times the Latin word et appears.

function count_et(string) {
  let count = 0
  for (let i = 0; string[i] !== undefined; i++) {
    if (string[i]==" "&&(string[i+1]=="e"||string[i+1]=="E")&&string[i+2]=="t"&&(string[i+3]==" "||string[i+3]=="."||string[i+3]==",")) {
      count++
    }
  }
  return count
}
console.log(count_et(lorem));

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

var str1 = "A man, a plan, a canal, Panama!"
var str2 = "jyotiranjan Sahoo"
var str3 = "Naman"

function palindromes(string) {
  let newString = ""
  let new_String = ""
  let index = 0
  var check = true
  for (let i = 0; string[i] !== undefined; i++) {
    if (string[i]>="A" && string[i]<="z") {
      newString+=string[i]
    }
  }


  for (let i = 0; newString[i] !== undefined; i++){
    if (newString[i] >= "A" && newString[i] < "a"){
      new_String+=newString[i]
    }
    else{
      new_String+=String.fromCharCode(newString.charCodeAt(i)-32)
    }
  }
  
  for (let i = 0; new_String[i] !== undefined; i++) {
    index++
  }


  for (let i = 0; i<(Math.ceil(index/2)); i++) {
    if (new_String[i]!==new_String[(index-1)-i]) {
      check = false
    }
  }
  return check
}
console.log(palindromes(str1));
console.log(palindromes(str2));
console.log(palindromes(str3));

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
