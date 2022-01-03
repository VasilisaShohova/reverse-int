module.exports = function reverse (n) {
    const reverse = require('type-reverse');
    const reversed = reverse(n);
    const reversedString = reversed.toString();
    if (reversedString.includes('-')) {
       const stringWithoutMinus = reversedString.replace('-', '');
      return parseInt(stringWithoutMinus);
    }
    else {
        return reversed;
    }
}
