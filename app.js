// console.log("Ayan")

// Chapter 21 to 25
// String Method

// Question#1
// var fisrtName = prompt("enter first name")
// var lastName = prompt("Enter Last Name")
// var fullName = fisrtName + lastName
// console.log(fullName)

// Question#2
// var user = prompt("Enter Your Fav Phone Name")
//  console.log("My Favorite phone is:" + user)
//  console.log("length of string is:" + user.length)

//Question#3
// var nationality = "Pakistani"
// console.log("String" + nationality)
// console.log("index of n :" + nationality.indexOf("n"))

//Question#4
// var greetuser = "Hello World"
// console.log("String" + greetuser)
// console.log("last index of 'l' :" +greetuser.lastIndexOf("l"))

//Question#5
// var nationality = "Pakistani"
// console.log("String" + nationality)
// console.log("Character at index 3:" + nationality[3])

//Question#6
// var fisrtName = prompt("enter first name")
// var lastName = prompt("Enter Last Name")
// var fullName = fisrtName.concat(lastName)
// alert(fullName)


//Question#7
// var firstcity = "Hyderabad"
// var after= "Islam"
// var replacement= after + firstcity.slice(5)
// document.write("City " + firstcity + "<br>")
// document.write(replacement)

//Question#8
// var message ="Ali and Sami are best friends. They play cricket and football together.";
// // console.log(message.indexOf("and".replace("&")))
// message = message.replace(/and/g,"&")
// console.log(message)

// Question#9
// var value = "472"
// document.write("Value: " + value + "<br>Type: " + typeof(value) + "<br>")
// value = +value
// document.write("Value: " + value + "<br>Type: " + typeof(value) + "<br>")

// Question#10
// var userinput = prompt("Enter your Name")
// console.log("User Input: " , userinput)
// userinput= userinput.toUpperCase();
// console.log("Upper Case: " , userinput)

// Question#11
// var name1 = "javascript"
// console.log(name1)
// name1 = name1[0].toUpperCase()+name1.slice(1)
// console.log(name1)

// QUESTION NO = 13
// const validChars = /^[A-Za-z0-9]+$/; // Regex to check for valid characters in username

// var username = prompt("Please enter a username:");

// while (!validChars.test(username)) { // Check for valid characters in username
//   alert("Username contains invalid characters. Please enter a valid username.");
//   username = prompt("Please enter a username:");
// }

// console.log(`Username: ${username}`); // Print the username to the console


// Question NO 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Wellcome to ABC Bakery. What do you want to order sir/ma'am").toLowerCase()
// if(userInput === "cake"){
//     document.write(userInput + " " + "is <b> avaliable </b> at index 0" + " "+ "in our bakery" )
// }else if(userInput === "apple pie"){
//     document.write(userInput + " " + "is <b> avaliable </b> at index 1" + " "+ "in our bakery" )
// }else if(userInput === "cookie"){
//     document.write(userInput + " " + "is <b> avaliable </b> at index 2" + " "+ "in our bakery" )
// }else if(userInput === "chips"){
//     document.write(userInput + " " + "is <b> avaliable </b> at index 3" + " "+ "in our bakery" )
// }else if(userInput === "patties"){
//     document.write(userInput + " " + "is <b> avaliable </b> at index 4" + " "+ "in our bakery" )
// }else{
//     document.write(" We are sorry. "+ " " + userInput + " " + "is not <b> avaliable </b> in our bakery" )
// }


// QUESTION NO = 15
// let password = prompt("Enter a password:");

// while (!isValidPassword(password)) {
//   password = prompt("Enter a valid password:");
// }

// alert("Password is valid!");

// function isValidPassword(password) {
//   // Check if password is at least 6 characters long
//   if (password.length < 6) {
//     return false;
//   }

//   // Check if password starts with a number
//   const firstChar = password.charCodeAt(0);
//   if (firstChar >= 48 && firstChar <= 57) {
//     return false;
//   }

//   // Check if password contains both alphabets and numbers
//   let hasAlphabets = false;
//   let hasNumbers = false;

//   for (let i = 0; i < password.length; i++) {
//     const charCode = password.charCodeAt(i);

//     if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//       hasAlphabets = true;
//     } else if (charCode >= 48 && charCode <= 57) {
//       hasNumbers = true;
//     }

//     if (hasAlphabets && hasNumbers) {
//       return true;
//     }
//   }

//   return false;
// }


// QUESTION NO 18
// const sentence = "The quick brown fox jumps over the lazy dog";
// const wordToSearch = "the";

// // Convert the sentence to lowercase to make the search case-insensitive
// const lowercaseSentence = sentence.toLowerCase();

// // Split the sentence into an array of words
// const words = lowercaseSentence.split(" ");

// // Initialize a counter for the number of occurrences
// let count = 0;

// // Loop through each word and check if it matches the word to search
// for (let i = 0; i < words.length; i++) {
//   if (words[i] === wordToSearch) {
//     count++;
//   }
// }

// console.log(`The word "${wordToSearch}" occurs ${count} times in the sentence.`);


// QUESTION NO 17
// const input = prompt("Enter a string:");

// const lastChar = input.charAt(input.length - 1);

// document.write(`The last character of the input "${input}" is "${lastChar}".`);


// ____________________*****_______________________//

// Chapter 26-30
// Question NO 1
// var num = prompt("Enter a positive integer:")
// document.write("<h3> number :" + num + "</h3>")
// var roundOff = Math.round(num)
// document.write("<h3> Round Off value :" + roundOff + "</h3>")
// var floorValue = Math.floor(num)
// document.write("<h3> Floor value :" + floorValue + "</h3>")
// var ceilValue = Math.ceil(num)
// document.write("<h3> Ceil value :" + ceilValue + "</h3>")


// Question NO 2
// var num = prompt("Enter a positive integer:")

// document.write("<h3> number :" + num + "</h3>")

// var roundOff = Math.round(num)
// document.write("<h3> Round Off value :" + roundOff + "</h3>")

// var floorValue = Math.floor(num)
// document.write("<h3> Floor value :" + floorValue + "</h3>")

// var ceilValue = Math.ceil(num)
// document.write("<h3> Ceil value :" + ceilValue + "</h3>")


// Question NO 3
// function absoluteValue(num) {
//     return Math.abs(num);
//   }
  
//   document.write( "absolute value of -4 is" + " " + absoluteValue(-4) + "<br>"); // output: 4
//   document.write("absolute value of 5 is" + " " + absoluteValue(5)); // output: 5
  


// Question NO 4
// var randomNum = Math.random()*5 + 1
// var roundNum = Math.floor(randomNum)
// document.write("<h1> random dice value :" + " " + roundNum + "</h1>")


// Question NO 5
// function coinToss() {
//     var randomNum = Math.random();
//     var result = randomNum < 0.5 ? "Heads" : "Tails";
//     document.getElementById("result").innerHTML = "The coin landed on " + result + "!";
//   }


// Question NO 6
// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random Number b/w 1 & 100 is: " + randomNumber);


// Question NO 7
// // Ask the user to enter their weight
// var weightInput = prompt("Enter your weight in kgs");

// // Remove any non-numeric characters from the input
// var numericWeight = parseFloat(weightInput.replace(/[^\d.]/g, ""));

// // Convert the weight to kilograms
// if (weightInput.toLowerCase().includes("kilograms") || weightInput.toLowerCase().includes("kgs")) {
//   var weightInKgs = numericWeight;
// } else {
//   var weightInKgs = numericWeight / 2.20462;
// }

// // Display the weight in the browser
// document.write("Your weight is: " + weightInKgs.toFixed(2) + " kgs");


// Question NO 8


// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userInput = prompt("Enter a number between 1 and 10")

// if(userInput === secretNumber){
//     alert("Congratulations! You guessed the secret number.");
// } else {
//   alert("Sorry, that is not the secret number. The secret number was " + secretNumber + ".");
// }



// Chapter 31-3
// QUESTION NO 1
// var now = new Date()
// document.write(now)


// QUESTION NO 2
// Create an array of month names
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//  Get the current month index (0-11)
// var currentMonthIndex = new Date().getMonth();

//  Get the month name from the array
// var currentMonthName = monthNames[currentMonthIndex];

//  Alert the current month name
// alert("The current month is " + currentMonthName);


// QUESTION NO 3
// var dayNames = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" ,"Fri" , "Sat"]
// var day = new Date().getDay()
// document.write("<h1>Today is :" + " " + dayNames[6] + "</h1>")
 

// QUESTION NO 4
/* var dayNames = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" ,"Fri" , "Sat"]
 if(dayNames === "Sat" || "Sun"){
     alert("It,s Fun day")
 }else{
     alert("It,s not a Fun day")
 }*/


// QUESTION NO 5 & 6
// var now = new Date()
// document.write("<h1>Current Date :" + " " + now + "</h1>")

// var totalmilliseconds = new Date("March 20 2023").getTime()
// document.write("<h1>Elapsed milliseconds Since January 1 1970 :" + " " + totalmilliseconds + "</h1>")


// var minutes = new Date()
// document.write("<h1>Elapsed minutes Since January 1 1970 :" + " " + minutes.getMinutes() + "</h1>")



// QUESTION NO 9
// var totaldays = new Date("June ,18 , 2015").getDay()
// document.write("<h1> "+totaldays +" " +"days have passed since 1st Ramadan, 2015 :</h1>")