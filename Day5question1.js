//1. Do the below programs in anonymous function & IIFE

//a. Print odd numbers in an array
// in anonymous function
const oddFun = function(arr)
{
    let oddArr = arr.filter(function(val)
    {
        if (val % 2 !== 0)
        return true;
    });
  
    return oddArr;
}
// oddFun([10,20,15,99,100,101]) ---> [15,99,101]

// in IIFE
let arr = [10,20,15,99,100,101];
(function(arr)
{
    let oddArr = arr.filter(function(val)
    {
        if (val % 2 !== 0)
        return true;
    });
  
    console.log(oddArr);
})(arr);

// ----------------------------------------------------------------------//

// b.Convert all the strings to title caps in a string array
// in anonymous function
function titlecase(arrVal)
{
    let tempArr = arrVal.toLowerCase().split(' ');
    let result = []
    for (let i = 0; i < tempArr.length; ++i)
    {
        let titleCase = tempArr[i][0].toUpperCase() + tempArr[i].slice(1);
        result.push(titleCase);
    }

    return result.join(' ');
}
const toTitleCaps = function(arr)
{
    
    let lowerArr = arr.map(titlecase);
    return lowerArr;
}

// console.log(toTitleCaps(['harIsh is gOod boy','miKe'])); ---> ["Harish Is Good Boy", "Mike"]


// in IFFE

let str = ['harIsh is gOod boy','miKe'];
(function(arr)
{
    let lowerArr = arr.map(titlecase);
  
    console.log(lowerArr);
})(str);

//---------------------------------------------------------------------------------------------------//

// c. Sum of all numbers in an array

// in anonymous function

const sum = function(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; ++i)
    {
        sum += arr[i];
    }

    return sum;
}

//console.log(sum([10,20,4,7])); -----> 41

// in IIFE
let a = [10,20,4,7];
(function(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; ++i)
    {
        sum += arr[i];
    }

    console.log(sum);
})(a);

/* -------------------------------------------------------------------------------------------------------------*/

// d. Return all the prime numbers in an array

// in anonymous function

function isPrime(val)
{
    if(val=== 0)
    return false;

    if(val===1)
    return true;
    
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

const toFindPrimeNo = function(arr)
{
    let primeArr = arr.filter(isPrime);
    return primeArr;
}
//console.log(toFindPrimeNo([0,1,9,3,21,99,71,100,6])); ----> [1,3,71]


// in IIFE

let b = [0,1,9,3,21,99,71,100,6];
(function(arr)
{
    console.log(arr.filter(isPrime));
})(b);


/* -------------------------------------------------------------------------------------------------------*/

// e. Return all the palindromes in an array

// in anonymous function

const isPalindrome = function(val)
{
    let tempArr = val.split('')
    if (tempArr.length === 0)
    return false;

    let start = 0;
    let end = val.length - 1;
    let flag = 1;
    while (start < end && flag === 1)
    {
        if(tempArr[start] !== tempArr[end])
        flag = 0;
        else
        {
            ++start;
            --end;
        }
    }

    if(flag === 1)
    return true;
    else
    return false;
}

const toFindPalindrome = function(arr)
{
    let palindArr = arr.filter(isPalindrome);
    return palindArr;
}

// console.log(toFindPalindrome(['harrah','jai','malayalam','david'])) -----> ["harrah", "malayalam"]

// in IIFE

let c = ['harrah','jai','malayalam','david'];
(function(arr)
{
    console.log(arr.filter(isPalindrome));
})(c);


/* ........................................................................................................... */

// f. Return median of two sorted arrays of same size

// in anonymous function

const toGetMedian = function (arr1,arr2)
{
    let m1 = arr1.length;
    let combinedArr = arr1.concat(arr2)
    combinedArr.sort((a,b) => a - b);
    let m2 = combinedArr.length - 1 - m1;

    return (combinedArr[m1] + combinedArr[m2])/2;
}

// console.log(toGetMedian([8,10,12],[1,7,15])); ---------> 9

// in IIFE

let ar1 = [8,10,12];
let ar2 = [1,7,15];
(function(arr1,arr2)
{
    let m1 = arr1.length;
    let combinedArr = arr1.concat(arr2)
    combinedArr.sort((a,b) => a - b);
    let m2 = combinedArr.length - 1 - m1;

    console.log((combinedArr[m1] + combinedArr[m2])/2);
})(ar1,ar2);

/* .....................................................................................*/

// g. Remove duplicates from an array

// in anonymous function
const removeDuplicates = function(arr)
{
    let resultArr = [];
    for ( i = 0; i < arr.length ; ++i)
    {
        if (resultArr.indexOf(arr[i]) === -1)
        {
            resultArr.push(arr[i]);
        }
    }

    return resultArr;
}

// console.log(removeDuplicates([1,20,1,8,8,9,20,17,-17])); -------> [1, 20, 8, 9, 17, -17]

// in IIFE
let d = [1,20,1,8,8,9,20,17,-17];
(function(arr)
{
    let resultArr = [];
    for ( i = 0; i < arr.length ; ++i)
    {
        if (resultArr.indexOf(arr[i]) === -1)
        {
            resultArr.push(arr[i]);
        }
    }

    console.log(resultArr);
})(d);

/* ................................................................................................................*/

// h. Rotate an array by k times

// in anonymous function

const rotate = function(arr,k)
{
    let val;
    for(i = 0; i < k ; ++i)
    {
       val = arr.pop();
       arr.unshift(val); 
    }

    return arr;
}

// console.log(rotate([1,2,3,4,5,6],3)); -------> [4, 5, 6, 1, 2, 3]


// in IIFE
let r = [1,2,3,4,5,6];
let k = 3;
(function(arr,n)
{
    let val;
    for(i = 0; i < k ; ++i)
    {
       val = arr.pop();
       arr.unshift(val); 
    }

    console.log(arr);
})(r,k);