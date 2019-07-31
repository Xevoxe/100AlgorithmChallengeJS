### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)
---
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

**Example**

For

    picture = ["abc",
           "ded"]
the output should be

    addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]

**Hints**
-   concat()
-   unshift()
-   push()

**Input/Output**
- **[time limit] 4000ms (js)**
- **[input] array.string picture**

A non-empty array of non-empty equal-length strings.

*Guaranteed constraints:*

1 ≤ picture.length ≤ 5,

1 ≤ picture[i].length ≤ 5.

- **[output] array.string**

The same matrix of characters, framed with a border of asterisks of width 1.

** Algorithm Notes **

- Append '*' character to the beginning of each array element and concatenate "*" to the end.
- Add border to the beginning of the array.
- Add border to the end of the array 