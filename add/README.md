### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

---
1. Write a function that returns the sum of two numbers.
2. Write a function that returns the sum of all numbers regardless of # of params.

**Example**

For param1 = 1 and param2 = 2, the output should be
add(param1, param2) = 3.

**Hints**
-   Arithmetic Operators
-   Rest Operator
-   forEach()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] integer param1**

Guaranteed constraints:

-100 ≤ param1 ≤ 1000.

**[input] integer param2**

Guaranteed constraints:
-100 ≤ param2 ≤ 1000.

**[output] integer**

The sum of the two inputs.

**Notes**

There are several loops that can be used with this problem.  Things to consider when determining which type of loop to use.

- Traditional for loop executes faster however at the expense of readibility.
- forEach loop helps to protect the function scope through use of closures from potential sideeffects.
- map Improves readibility because at first glance you are aware that this function will be transforming the original function and returning a new array.
- reduce Much like the map function a user knows that the function will be reducing the items into the array into a single value.