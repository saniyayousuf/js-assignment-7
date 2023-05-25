//  chapter  20 (Changing Case) 

// 1
// var userInput =prompt("enter");
// var allLower = userInput.toLowerCase();
// console.log(allLower)

// 2
// var x = "ABCDFGH";
// var x = x.toLowerCase();
// console.log(x);

// 3
// var y ="web development";
// var y = y.toUpperCase();
// console.log(y)

// 4
// var Lower_case ="MonGo Db ";
// var result;
// result = Lower_case.toLowerCase();
// console.log(result);

// // 5
// var array =["saad","zain","abbas"];
// var resultArray = array.map(element => {
//     return element.toUpperCase()}
// )
// console.log(resultArray)

// 6
// var a ="hello world"
// a= a.toUpperCase();
// alert(a)

// 7
// var cityName ="kaRacHi";
// var firstLetter = cityName.slice(0,1);
// var firstLetter =firstLetter.toUpperCase();
// var remainingLetter = cityName.slice(1);
// var remainingLetter =remainingLetter.toLowerCase();
// var newCityName = firstLetter + remainingLetter;
// console.log(newCityName)


// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌




//  Chapter   22 -25 (Strings)
// 1
// var someWords ="captain";
// var sliceWord = someWords.slice(1,3)
// console.log(sliceWord)

// 3
// var animal = "elephant"
// var seg = animal.slice(2,6);
// console.log(seg)

// 4
// var variable = "artificial"
// var numOfString =variable.length
// console.log(numOfString)

// 5
// var st1 ="instagram" 
// var st1_ =st1.length;
// var st$= st1.slice(0,1)
// var st_= st1.slice(6,10);
// var st2 =st$+st_;
// console.log(st2)

// 6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
// value = 3

// 7
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// value =16


// 8
// var idNum = "go"
// var indx = idNum.indexOf('g');
// console.log(indx)

// 9
// var userinput =prompt("enter");
// for(var i =0; i<userinput.length ;i++){
//     if (i == "g "){
//         alert(" g exist")}
//         else{
//             alert("doesnot exist")
//         }break
//   }
// 

// 10
// var variabe ="abcde";
// var newVariable = variabe.charAt(2)
// console.log(newVariable)

// 11
// var text = "alpaline gelata"
// var cha = text.charAt(10)
// console.log(cha)

// 12
// var str ="example"
// var x =str.charAt(str.length-1)
// console.log(x)

// 13
// var input = prompt("enter a word");
// var  y = input.charAt(5);
// console.log(y)

// 14
// var text = prompt("enter a random word");
// for (var i = 0 ; i<text.length ; i++){
//     if(text[i] == "a"){
//         console.log('text exists')
//         break
//     }
//     else (console.log("text doesn't exists"))
// }
// console.log(typeof text)

// 15
// let myString = " how are you?";
// let myArray = [];
// for (let i = 0; i < myString.length; i++) {
//   myArray[i] = myString.charAt(i);
// }
// console.log(myArray);
// let reply = "no, I am a boy."; 
// let revisedReply = reply.replace("no", "yes");
// console.log(revisedReply);


// 16
// var str = " I have 2 cakes  , 3 jelly & 1 chocolate";
// var NewStr = str.replace(1,"one");
// console.log(NewStr)

// 17
// var  x ="Lorem ipsaum dolor sit amet a consectetur adipisicing elit. Minima, quibusdam?"
// var y =x.replace( "a", "z");
// console.log(x)


// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌



// Chapter 26 (Rounding Numbers)
// 1
// var number = "4.487";
// var newNum = parseInt(number);
// console.log(newNum)

// 2
// var origNum = 5.55555;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum)

// 3
// var origNum = 5.55555;
// var roundNum = Math.floor(origNum);
// console.log(roundNum)

// 4
// var variable = 4.65656;
// var newNum = Math.round(variable);
// console.log(newNum)

// 5
// var number_ = 0.5
// var result = Math.floor(b=number_)
// console.log(result)

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌


// Chapter 27 (Random Numbers)
// 1
// var number =Math.random()
// var result= number * 51
// var result = Math.floor(result)
// console.log(result)

// 2
// var result;
// var randomNumber =Math.random();
// result = randomNumber
// console.log(result)

// 3
// var dice = Math.ceil(Math.random()* 6)
// console.log(dice)

// 4
// var randomNumber = Math.ceil(Math.random()* 6)
// if( randomNumber == 1){
//     alert ("you have head")
// }
// else(alert("you have tail"))

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// Chapter 28, 29 (Converting Strings)
// 1
// var num ="25"
// num = parseInt(num)
// console.log(typeof num)

// 2
// var number = "123"
// number =Number(number)
// console.log(typeof number)

// 3
// var  stringNum = "3.14";
// var  floatNum = parseFloat(stringNum);
// console.log(floatNum); 

// 4
// we use
// console.log(typeof number)

// 5
// var num =1
// num = num.toString()
// console.log(typeof num)

// 6
// var number =42
// number = number.toString()
// console.log(typeof number)

// 7
// var string = "3.14"
// string = parseInt(string)
// console.log(string)


// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌


// Chapter 30 (Controlling the length of decimals)
// 1
// var  num =1.1245687242
// var num = num.toFixed(4)
// var newNum = num.toString()
// console.log(newNum)
// console.log(typeof newNum)

// 2
// var number = 3.4547892
// var result = number.toFixed(3).toString
// var result =parseInt(result)
// console.log(result)

// 3
// if len(str(round(num,2))) > 4:

// 4
// var myNumber = 3.14159265359; 
// var roundedNumber = myNumber.toFixed(2);
// var stringNumber = roundedNumber.toString(); 
// alert(stringNumber); 


// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌


// Chapter 31 - 34 (Date & Time)
// 1
// var now = new Date ()
// console.log(now)

// 2
// var now = new Date ()
// var dStr = now.tostring()
// console.log(dStr)

// 3
// Date d = new Date();
// SimpleDateFormat sdf = new SimpleDateFormat("EEEE");
// String day = sdf.format(d);

// 4
// var now = new Date()
// var day = now.getDay()
// var daysArr = ["sat","sun","mon","tue","wed","thurs","fri"]
// var today = daysArr[day]
// console.log('day',today)

// 6
// var later = new Date(2020, 11, 31)

// 7
// var date = new Date(1992, 02,02)
// console.log(date)

// 8
// alert(Date.now() - Date.parse("January 1, 1980"))

// 9
// var now = new Date ()
// var newDate =now.setFullYear(2021)
// console.log(now )

// 10
// function changeMonthToJanuary(date) {
//var  newDate = new Date(date.getFullYear(), 0, date.getDate());
//   return newDate;
// }
// var  originalDate = new Date(2021, 11, 15);
// var januaryDate = changeMonthToJanuary(originalDate);
// console.log(januaryDate); 

// 11
// var date = new Date('2021-10-10'); 
// date.setDate(date.getDate() + 1);
// date.setDay(4); 
// console.log(date); 

// 12
// function changeMinutes(time) {
//     var newMinutes = prompt("Enter the new value for minutes:");
//     var newTime = time.split(":");
//     newTime[1] = newMinutes;
//     return newTime.join(":");
//   }

// 13
// function addHours(time, hours) {
//     var date = new Date('01/01/2000 ' + time);
//     date.setHours(date.getHours() + hours);
//     var hour = date.getHours();
//     var minutes = date.getMinutes();
//     if (hour < 10) {
//       hour = '0' + hour;
//     }
//     if (minutes < 10) {
//       minutes = '0' + minutes;
//     }
//     return hour + ':' + minutes;
//   }
//   addHours('09:30')
 

// 14
// var now = new Date()
// var time =now .getTime()
// var birthDAte = new Date("april 18 , 2005")
// var birthTime = birthDAte.getTime()
// var difference  = time - birthTime
// var age = (difference / 1000 * 60  * 60 * 24 *365 )
// alert(MAth.floor(age))
// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// Chapter 35 - 37 (Functions)
// 1
// function  data(message){
//     alert(message)
// }
// data("hellow World")


// 2
// function name(askName){
//     var userInput = askName
//     return userInput
// }
// var  result = name(prompt(" enter your name"))
// console.log(result)


// 4
// function name(Name){
//         var userInput = Name
//         return userInput
//   }
// var  result = name(prompt(" enter name") )
//  alert(result)

// 5
// function concat(variable,string,number){
// var sum = variable + string +number
// return sum
// }
// var result =concat('x', "juice", 2154)
// console.log(result)

// 6
// / function concat(string,number)
//   var concatenate =  string +number
//   return cocateate
// }
//  var result =concat( "artifical inteligence ", 4.0)
// console.log(result)
    
    // 7
// function multiplyNum (number1 , number2 , number3){
//     var result = number1 * number2 * number3
//     return result
// }

// var result = multiplyNum( 2 , 4 , 8)
// console.log(result)

// 8
// function getAverage(numbers) {
//   var  sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum 
// }
// var numbers = [+prompt("enter numbers"),+prompt("enter numbers"),+prompt("enter numbers"),+prompt("enter numbers")];
// var average = getAverage(numbers);
// console.log(average);

// 9
// function sum(num1,num2){
//     var addition = num1 + num2;
//     return addition
// }
// var result = sum(+prompt("enter a number"),+prompt("enter again number"))
// console.log(result)

// 10  
// / function getAverage(numbers) {
 //   var  sum = 0;
 //   for (let i = 0; i < numbers.length; i++) {
 //     sum += numbers[i];
 //   }
 //   return sum 
 // }
 // var numbers = [+prompt("enter numbers"),+prompt("enter numbers"),+prompt("enter numbers"),+prompt("enter numbers")];
 // var average = getAverage(numbers);
 // console.log(average);
    
// 11
// function multiply(a, b) {
//     return a * b;
//   }
  
//   var result = multiply(2, 3);
//   console.log(result);

// 12
// function countLetters(word) {
//     let counts = {};
//     for (let i = 0; i < word.length; i++) {
//       let letter = word[i];
//       if (counts[letter]) {
//         counts[letter]++;
//       } else {
//         counts[letter] = 1;
//       }
//     }
//     return counts;
//   }
//   let word = prompt(" enter any  word");
//   let letterCounts = countLetters(word);
//   console.log(letterCounts); 

// 13
// function setYear(date, year) {
// date.setFullYear(year);
// return date;
// }
// var  myDate = new Date();
// console.log(myDate); 
// setYear(myDate, 2022);
// console.log(myDate)


// 14
// function getAge(dateOfBirth) {
//     var birthDate = new Date(dateOfBirth);
//     var today = new Date();
//     var age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
  
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
  
//     return age;
//   }
//   var age = getAge('2005-04-18');
// console.log(age);

// 15
// function presenceOfWord( inputName , array){
//     matchfound = false
//     for(var i = 0 ; i<array.length ;i++){
//       if (array[i] == inputName ){
//         alert( true)
//         break
//     }
//     else (alert(false))
// break
// }
// }
// presenceOfWord(prompt("enter your name"),['zaid','haris','raza','abubakar','hassan','hussain','fatima'])

// 16
// function repeatWord( word){
//     var repeatedWOrd = word.repeat(10);
//     return repeatedWOrd
// }
// var result = repeatWord(prompt("enter a word"))
// var result= result.split(' ')
// console.log(result)



// 17
// function reverse( array ) {
//     array =[ 'y','r','t','s','i','m','e','h','c']
//     var result =array.reverse()
//     return result
// }
// var resultArrayy = reverse()
// console.log(...resultArrayy)


// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌



// Chapter 38 (Local vs. Global Variables)
// 1
// function names (name1 , name2){
//     var result = name1 +name2;
//     return result
// }
//  var result = names("saniya "," yousuf")
// console.log(result)


// 2
// var num1 = +prompt(":enter any number")
// function clacNum (num2){
//     var result = num1 + num2;
//     return result 
// }
// var result = clacNum(5)
// console.log(result)


// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// Chapter 39, 40 (Switch Statements)
// 1
// var age =  +prompt("enter your age");
// var variable = 5;
// switch (variable){
//     case age + 4 :
//         alert ("you are selected")
//         break
//     case age > 20  && age < 40:
//      alert("you aren't selected")    
//     break
//     default: alert("please enter the right number.")
// }
// console.log(age)


// 2
// var city = prompt("enter your city name");
// var city = city.toLowerCase();
// switch (city){
//     case "karachi" :
//  alert("congratulation");
//  break
//  case "lahore" :
//  alert("congratulation");
//  break
//  case "peshawar" :
//  alert("congratulation");
//  break
//  case "multan" :
//  alert("congratulation");
//  break
//  default: alert(" sorry this city is not matched")
// }

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌


