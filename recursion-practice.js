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

/* Write a recursive function that splits a string based on a 
separator (similar to String.prototype.split). 
Don't use JS array's split function to solve this problem. */

function strSplit(str, sep) {
  let currentSep = str.indexOf(sep);
  if(currentSep === -1) {
    return [str];
  } else {
    return [str.slice(0, currentSep), ...strSplit(str.slice(currentSep+1), sep)]
  }
}

console.log(strSplit('02/20/2020', '/'));

/* Write a recursive function that prints the Fibonacci sequence of a given number. 
The Fibonacci sequence is a series of numbers in which each number 
is the sum of the 2 preceding numbers. 
For example, the 7th Fibonacci number in a Fibonacci sequence is 13. 
The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13. */

function fib(num, cur = 1, prev = 0) {
  if(num === 0) {
    return;
  }

  console.log(cur);

  return fib(num - 1, cur + prev, cur);
}

fib(7);

/*
Write a recursive function that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number between itself and 1.
 For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
 */

 function factorial(num) {
   if(num === 1) {
     return 1;
   }
   return num * factorial(num - 1)
 }

console.log(factorial(8));

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]

function mazeEscape(maze, x = 0, y = 0){

  if(maze[x][y] === 'e') {
    return ''
  }
  else if(maze[x][y+1] != '*' && y+1 < maze[x].length) {
    return 'R' + mazeEscape(maze, x, y+1)
  }
  else {
    return 'D' + mazeEscape(maze, x+1, y)
  }

}

console.log(mazeEscape(maze));