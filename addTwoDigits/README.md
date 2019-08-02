### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

---
You are given a two-digit integer n. Return the sum of its digits.

**Example**

For n = 29, the output should be
addTwoDigits(n) = 11.

**Hint**
-   split()
-   parseInt()
-   toString()
-   reduce()

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] integer n**

    A positive two-digit integer.

*Guaranteed constraints:*

10 ≤ n ≤ 99.

- **[output] integer**

    The sum of the first and second digits of the input number.

** Algorithm Notes **

This algorithm was pretty easy to brute force the solution with math operators since it only required 2 numbers.

n % 10 will give the digit in the ones place.
(n - (n%10))/10 will give the digit in the tens place by substracting the ones digit and dividing by 10.

In order to add difficulty to the problem I decided to create a function that will add any digit sized number.

Check if n < 0 If it is return number
Add n Mod 10 to number
Repeat Algorithm with result of n = n/10 WITHOUT Decimal

** Issues with this approach **
1. Because number type in Javascript includes decimals the function was not getting the correct result.  In order to solve this problem I had to use Math.trunc() which will remove the decimal from the number.




