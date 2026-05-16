const sumAll = function(a, b) {
    if(Number.isInteger(a) && Number.isInteger(b) && a>0 && b>0){
        let l = Math.min(a,b);
        let h = Math.max(a,b);
        let sum=0;
        for(let i=l; i<=h; i++) sum+=i;
        return sum;
    }
    else return "ERROR";
    
};

// Do not edit below this line
module.exports = sumAll;
