var readLine = require('readline');
var r = readLine.createInterface(process.stdin, process.stdout);

r.question("Enter a value for 'X': ", function(x) {

    r.setPrompt("Enter a number to check: ");
    r.prompt();

    r.on('line', function(num) {

        if (num === 'exit') {
            r.close();
        } else {
            console.log(`Answer: ${roundToNearest(num, x)}`);
            r.setPrompt(`Enter another number to check ('exit' to leave): `);
            r.prompt();
        }
    });
});

r.on('close', function() {
  process.exit();
});

var roundToNearest = function(num, roundTo) {

    // If number is smaller than "X"
    // Assumes "X" or roundTo is greater than zero
    if (num <= roundTo) {
        return roundTo;
    } else {
        // How many times "X" fits into the number
        var countInto = parseInt(num / roundTo);
        // How much is left over
        var remainder = num % roundTo;
        // If the remainder is greater than halfway to the next multiple of "X"
        if (remainder >= roundTo / 2) {
            return roundTo * (countInto + 1);
        } else {
            return num - remainder;
        }
    }
};
