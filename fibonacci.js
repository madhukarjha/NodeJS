const calculateSum=(n) =>{
    if (n <= 0)
       return 0;
 
    let fibo=[];
    fibo[0] = 0, fibo[1] = 1;
 
    // Initialize result
    let sum = fibo[0] + fibo[1];
 
    // Add remaining terms
    for (let i=2; i<=n; i++)
    {
        fibo[i] = fibo[i-1]+fibo[i-2];
        sum += fibo[i];
    }
 
    return sum;
}
 
//const result = calculate(30);
exports.fibonacci = calculateSum;