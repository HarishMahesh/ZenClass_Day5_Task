/* GUVI : Zen Code-Sprints :— JavaScript Functions — Warmup Pbms */

/* 1. Write a function called “addFive”.
Given a number, “addFive” returns 5 added to that number. */

var num = 10;
function addFive(num) { 
    return num + 5;
}
var result = addFive(num)


/* 2. Write a function called “getOpposite”.
Given a number, return its opposite */

var num1 = 5;
function getOpposite(num) {
    return -(num);
}
var result1 = getOpposite(num1)

/* 3. Fill in your code that takes an number minutes and converts it to seconds. */

var min = 5;
function toSeconds(min) {
    return min * 60;
}
var secs = toSeconds(min)

/* 4.  Create a function that takes a string and returns it as an integer. */

var mystr = "5";
function toInteger(mystr) {

    return parseInt(mystr);
}
var myint = toInteger(mystr)

/* 5.Create a function that takes a number as an argument, increments the number by +1 and returns the result. */

var myint1 = 0;
function nextNumber(myint) {
    return myint + 1;
}
var myNextint = nextNumber(myint1)

/* 6.Create a function that takes an array and returns the first element. */

var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr)

/* 7.Convert Hours into Seconds
     Write a function that converts hours into seconds. */


var arr2 = [1, 2, 3];
function hourToSeconds(arr) {
    return arr.map(val => val * 3600);
}
var data2 = hourToSeconds(arr2)

/* 8.Find the Perimeter of a Rectangle
    Create a function that takes height and width and finds the perimeter of a rectangle. */

function findPerimeter(num1,num2) {
    return 2 * (num1 + num2);
}
var peri = findPerimeter(6,7)

/* 9.Less Than 100?
    Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.*/

function lessThan100(num1,num2) {
    return (num1 + num2) < 100;
}
var res = lessThan100(22,15)

/* 10.There is a single operator in JavaScript, capable of providing the remainder of a 
    division operation. Two numbers are passed as parameters. The first parameter 
    divided by the second parameter will have a remainder, possibly zero. Return that value. */

    function remainder(num1,num2) {
        return num1 % num2;
    }
    var res = remainder(1,3)


/* 11.Old macdonald had a farm:
    MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
    turkey = 2 legs
    horse = 4 legs
    pigs = 4 legs
    The farmer has counted his animals and he gives you a subtotal for each species. 
    You have to implement a function that returns the total number of legs of all the animals. */

    function CountAnimals(tur,horse,pigs) {

        return ((tur * 2) + (horse * 4) + (pigs * 4));
    }
    var legs = CountAnimals(2,3,5)

/* 12.Frames Per Second
    Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

    function frames(num1,num2) {
        return num1 * 60 *num2;
    }
    var fps = frames(1,2)

/* 13.Check if an Integer is Divisible By Five
    Create a function that returns true if an integer is evenly divisible by 5, and false otherwise. */

    function divisibleByFive(num1) {

        return (num1 % 5 === 0)
    }
    var divisible = divisibleByFive(5)

/* 14.Write a function called “isEven”.
    Given a number, “isEven” returns whether it is even. */

    function isEven(num){
        // your code here

        if (typeof(num) == 'number')
        {
            return num % 2 === 0;
        }
        else
        return -1;
    }
    var even = isEven('5a')

/* 15.Write a function called “areBothOdd”.
    Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd. */

    function areBothOdd(num1, num2){
        // your code here

        return (num1 % 2 !== 0) && (num2 % 2 !== 0);
    }

/* 16.Write a function called “getFullName”.
    Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space. */


    function getFullName(firstName, lastName){
        // your code here
    }
    
/* 17.Write a function called “getFullName”.
    Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.*/

    function getFullName(firstName, lastName){
        // your code here

        if(firstName && lastName)
        return firstName + ' ' + lastName;

        return firstName + lastName;

    }

/* 18.Write a function called “getLengthOfWord”.
    Given a word, “getLengthOfWord” returns the length of the given word. */

    function getLengthOfWord(word1){
        // your code here

        return word1.length;
    }

/* 19.Write a function called “isSameLength”.
    Given two words, “isSameLength” returns whether the given words have the same length. */

    function isSameLength(word1, word2){
        // your code here
        return word1.length === word2.length;
    }

/* 20.Create a function to calculate the distance between two points defined by their x, y coordinates */

console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
    let a = Math.pow(x2 - x1,2)
    let b = Math.pow(y2 - y1,2)
    return Math.sqrt(a + b);
}

/* 21.Write a function called “getNthElement”.
    Given an array and an integer, “getNthElement” returns the element at the given integer, 
    within the given array. If the array has a length of 0, it should return ‘undefined’. */

    function getNthElement(array,n){
        // your code here
        if (array.length === 0)
        return undefined;

        if (n >= array.length || n < 0)
        return -1;

        return array[n];
    }

/* 22. Write a function called “getLastElement”.
    Given an array, “getLastElement” returns the last element of the given array. 
    If the given array has a length of 0, it should return ‘-1’. */

    function getLastElement(array){
        // your code here
        if(array.length === 0)
        return -1;

        return array[array.length - 1];
    }

/* 23.Write a function called “getProperty”.
    Given an object and a key, “getProperty” returns the value of the property at the given key. 
    If there is no property at the given key, it should return undefined. */

    var obj = {
        mykey: 'value'
    };
    function getProperty(obj,key) {
        // your code here
        

        return obj[key];
    }

/* 24.Write a function called “addProperty”.
    Given an object and a key, “addProperty” adds a new property on the given object with a value of true. */

    var obj1 = {
        mykey: 'value'
    };
    function addProperty(obj, key){
        // your code here
        obj[key] = true;
    }

    addProperty(obj1,'harish')
    console.log(obj1);

/* 25.Write a function called “removeProperty”.
    Given an object and a key, “removeProperty” removes the given key from the given object. */

    var obj2 = {
        h1 : 10,
        h2 : 'harish',
        h3 : true
    };
    function removeProperty(obj, key){
        // your code here
        if (!obj[key])
        return undefined

        delete obj[key]
        return true;
    }

    console.log(removeProperty(obj2,'h5'));
    removeProperty(obj2,'h2');

    console.log(obj2);

/* 26.Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. */

var arr5 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length ; ++i)
    {
        if (arr[i] > 0)
        sum1 += arr[i];
        else
        sum2 += arr[i];
    }

    return [sum1,sum2];
}
console.log(ar2(arr5));

/* 27.Create a function that receives an array of numbers and returns an array containing only the positive numbers */

function getPositives(ar)
{
 // your code here
    return ar.filter(val => val > 0)
}
var numarr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var resArr = getPositives(numarr);
console.log(resArr);

/* 28.Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent). */

function powersOfTwo(n){

    let res = [];

    for (i = 0; i <= n ; ++i)
    {
        res.push(Math.pow(2,i));
    }
  
    return res.join(',');
}

console.log(powersOfTwo(3));

/* 29.Find the maximum number in an array of numbers */

function findMax(ar)
{
// your code here
    return Math.max(...ar);
}
var arr3 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(arr3);
console.log('Max: ', max);

/* 30.Print the first 100 prime numbers */

printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, '→', i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(val)
{
 // your code here
    if (val % 2 === 0)
    return false;
 
    let flag = 1;
 
    for (let i = 3; i < Math.ceil(val) && (flag === 1) ; i = i + 2 )
    {
    
        if (val % i === 0)
        flag = 0;
     
    }
    if(flag ===0)
    return false;
    else
    return true;

}

/* 31.Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt” */

console.log(getPrimes(10,100));
function getPrimes(nPrimes, startAt)
{
// your code here
    let res = [];
    let i = 0;
    while (i < nPrimes)
    {
        if(isPrime(startAt))
        {
            ++i;
            res.push(startAt);
        }

        ++startAt;
    }
    return res;
}

/* 32. Reverse a string */

var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
    return s.split('').reverse().join('')
   // your code here  
}

/* 33.Create a function that will merge two arrays and return the result as a new array */

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var arrRes = mergeArrays(array1, array2);
console.log(arrRes);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 //Some piece of code goes here 
 
 for(let el of ar2)
 {
 result.push(el);
 }
 return result;
}

/* 34. Calculate the sum of numbers received in a comma delimited string */

console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));
function sumCSV(s)
{
      // your code here
    let sum = 0;
    let temp = s.split(', ').map(Number);
    for (i = 0; i < temp.length; ++i)
    {
        sum += temp[i];
    }
    return sum;

}
