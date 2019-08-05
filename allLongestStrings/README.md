### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

---
Given an array of strings, return another array containing all of its longest strings.

**Example**

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

**Hints**
-   None

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.string inputArray**

A non-empty array.

*Guaranteed constraints:*

1 ≤ inputArray.length ≤ 10,

1 ≤ inputArray[i].length ≤ 10.

- **[output] array.string**

Array of the longest strings, stored in the same order as in the inputArray.

** Notes **

The solution for this algorithm trades readibility for time complexity.  Since the current solution only has to iterate through the list once it has a O(n).

The more readable solutions that I have run across for solving this algorithm require two loops.  One to find the length of the longest word and then another loop to filter the longest words out.  Thus making it have a time complexity of O(n^2)

