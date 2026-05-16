const removeFromArray = function(li, ...nums) {
    return li.filter(n=> !nums.includes(n))
};

// Do not edit below this line
module.exports = removeFromArray;
