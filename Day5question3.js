// 3. Do the below programs in arrow functions

// a. Print odd numbers in an array

const findOdd = (arr) =>
{
    let oddArr = arr.filter( val => val % 2 !== 0);
  
    return oddArr;
}

console.log(findOdd([10,20,15,99,100,101]))

/* ...................................................................................*/

// b. Convert all the strings to title caps in a string array

const titlecapsCoversion = (arr) =>
{
    
    let lowerArr = arr.map(arrVal =>
        {
            let tempArr = arrVal.toLowerCase().split(' ');
            let result = []
            for (let i = 0; i < tempArr.length; ++i)
            {
                let titleCase = tempArr[i][0].toUpperCase() + tempArr[i].slice(1);
                result.push(titleCase);
            }

            return result.join(' ');
        });
    return lowerArr;
}

console.log(titlecapsCoversion(['harIsh is gOod boy','miKe']));

/*........................................................................................*/

// c. Sum of all numbers in an array

const sumOfArray = (arr) =>
{
    let sum = 0;
    for(let i = 0; i < arr.length; ++i)
    {
        sum += arr[i];
    }

    return sum;
}

console.log(sumOfArray([10,20,4,7]));

/* ............................................................................................*/

// d. Return all the prime numbers in an array

const isPrimeNo =(val) =>
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

const FindPrimeNo = (arr) =>
{
    let primeArr = arr.filter(isPrimeNo);
    return primeArr;
}

console.log(FindPrimeNo([0,1,9,3,21,99,71,100,6]));

/*.....................................................................................*/

// e. Return all the palindromes in an array

const isStrPalindrome = (val) =>
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

const FindPalindrome = (arr) =>
{
    let palindArr = arr.filter(isStrPalindrome);
    return palindArr;
}

console.log(toFindPalindrome(['harrah','jai','malayalam','david']));