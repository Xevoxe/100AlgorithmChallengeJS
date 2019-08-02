### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

---

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

**Example**

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

**Hints**
-   None

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer inputArray**

An array of integers containing at least two elements.

*Guaranteed constraints:*

2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

- **[output] integer**

The largest product of adjacent elements.

** Notes **

Used reduce to determine the result

Reduce function starts at 1 automatically.


Added difficulty by returning an array of the two numbers instead of the result.
Loop Start at 1 until < index.Length
index[n] multiply by index[n-1]
If Result is > than current stored value then result[0] = n && result[1] = index[n-1]
Else Continue

