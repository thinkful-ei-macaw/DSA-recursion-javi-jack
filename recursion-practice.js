/* Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. 
That number should be the number of sheep you have. 
The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence */

const sheepCounter = function(num) {
  if(num === 0) {
    console.log('All the sheep has jumped over the fence')
    return;
  }
  else {
    console.log(`${num}: Another sheep jumps over the fence`)
    return sheepCounter(num - 1);
  }
}

sheepCounter(4);

/* Write a function called powerCalculator() 
that takes two parameters, an integer as a base, 
and another integer as an exponent. 
The function returns the value of the base raised to the power of the exponent. 
Use only exponents greater than or equal to 0 (positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0 */

const powerCalculator = function(base, exponent) {
  if(exponent === 0) {
    return 1;
  }
  else if(exponent <= 0) {
    return 'Exponent should be >= 0'
  }
  else {
    return base * powerCalculator(base, exponent - 1);
  }

}

console.log(powerCalculator(3, 4));

// Write a function that reverses a string. 
// Take a string as input, reverse the string, and return the new string.

function reverseString(str) {
  if(!str.length) {
    return '';
  }
  return str.slice(-1) + reverseString(str.slice(0, -1));
}

console.log(reverseString('hello'));

/* Calculate the nth triangular number. A triangular number counts the objects that can 
form an equilateral triangle. The nth triangular number is the number of dots 
composing a triangle with n dots on a side, and is equal to the sum of the 
n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45. */ 

function nthTri(num) {
  if(!num) {
    return 0;
  }
  return num + nthTri(num - 1);
}

console.log(nthTri(7));