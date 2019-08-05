function allLongestStrings(inputArray: string[]): string[] {
    let longestStrings= [];
    for(let x = 0; x < inputArray.length;x++){
        if(longestStrings.length > 0){
            if(longestStrings[0].length < inputArray[x].length){
                longestStrings = [];
                longestStrings.push(inputArray[x]);
            }else{
                if(longestStrings[0].length === inputArray[x].length){
                    longestStrings.push(inputArray[x]);
                }
            }

        }else{
            longestStrings.push(inputArray[x]);
        }
    }
    return longestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));