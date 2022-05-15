const removeFromArray = function(...args) {
    let arr = args[0];
    let elemsToRemove = args.slice(1);
    return arr.filter((value) =>{
        return elemsToRemove.includes(value) == false;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
