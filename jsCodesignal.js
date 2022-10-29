function solution(numbers, left, right) {
    let totalnumbers = numbers.length
    let result = new Array(totalnumbers)
    
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        denominator = i+1
        numerator = numbers[i]
        x = numerator / denominator
        if (Number.isInteger(x)){
            console.log("x is integer " + x)
            console.log(numerator+  " = " +denominator + " x "+x )
        
            if(left <= x && right >= x) {
                result[i] = true
            } else result[i] = false
        } else {
            console.log("x is Not an integer " + x)
            result[i] = false
        }
       
    }
    return(result)
}

// You are given an array of integers numbers and two integers left and right. You task is to calculate a boolean array result, where result[i] = true if there exists an integer x, such that numbers[i] = (i + 1) * x and left ≤ x ≤ right. Otherwise, result[i] should be set to false.
