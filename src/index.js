module.exports = function reverse (n) {
   
    const numToString = n.toString().split("").reverse().join("");
    const reversedNum = parseInt(numToString, 10);
    return reversedNum;

}
