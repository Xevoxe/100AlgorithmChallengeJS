function adjacentElementsProduct(inputArray: number[]): number {

    let result = inputArray.reduce((value,number,index,inputArray)=>{
        let next = number*inputArray[index-1];
        if(next > value){
             return next;
        }
        return value;
    })

    return result;
     
}


function adjacentElementsProductArray(inputArray: number[]): number[] {
    
    let result = [];
   
    for (let n = 1 ; n < inputArray.length; n++){
        
        if(result.length === 0){
            result.push(inputArray[n]);
            result.push(inputArray[n-1]);
            continue;
        }

        let max = result[0] * result[1];
        let next = inputArray[n] * inputArray[n-1];

        if(next > max){
            result[1] = inputArray[n];
            result[0] = inputArray[n-1];
        }
    }

    return result;
     
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

console.log(adjacentElementsProductArray([3, 6, -2, -5, 7, 3]));