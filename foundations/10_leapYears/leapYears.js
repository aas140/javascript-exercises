const leapYears = function(yy) {
    return (yy%4===0 && yy%100!==0) || (yy%400===0)
    
};

// Do not edit below this line
module.exports = leapYears;
