const fibonacci = function(num) {
    let count = Number(num);
    if(count < 0) 
        return "OOPS";
    if(count == 0)
        return 0;
    
    let first = 0;
    let second = 1;

    for(let i = 2; i <= count; i++){
        let current = first + second;
        first = second;
        second = current;
    }
    return second;

};

// Do not edit below this line
module.exports = fibonacci;
