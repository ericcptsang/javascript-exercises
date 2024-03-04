const sumAll = function(int1, int2) {
    if(!Number.isInteger(int1) ||
       !Number.isInteger(int2) ||
       int1 < 0 || int2 < 0){
        return "ERROR";
    }
    let small, big;
    if(int1 < int2){
        small = int1;
        big = int2;
    } else {
        small = int2;
        big = int1;
    }
    let sum = 0;
    for(let i = small; i <= big; i++){
        sum+=i; 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
