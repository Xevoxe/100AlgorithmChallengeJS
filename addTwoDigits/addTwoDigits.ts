function addTwoDigits(n: any): number {
    return (n % 10) + (n - (n%10))/10;
}

function addAnyDigits(n:number):number {
    const recursive = (accumulator,number)=>{
        if(number <= 1){
            return accumulator;
        }
        let num = number % 10;
        accumulator += num;
        return recursive(accumulator,(Math.trunc(number/10)));
    }
    return recursive(0,n);
}

console.log(addTwoDigits(29));
console.log(addAnyDigits(12587455874587));