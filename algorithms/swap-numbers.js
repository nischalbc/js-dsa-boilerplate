/**
 * Strategy 1 is using a Temporary variable
 *
 */
class SwapNumbersStrategy1 {

    constructor(numberOne, numberTwo) {
        const temp = numberOne;
        numberOne = numberTwo;
        numberTwo = temp;
        console.log(numberOne, numberTwo);
    }

}


/**
 * Strategy 2 is using not temporary variable
 *
 */
class SwapNumbersStrategy2 {

    constructor(numberOne, numberTwo) {
        numberOne = numberOne + numberTwo;
        numberTwo = numberOne - numberTwo;
        numberOne = numberOne - numberTwo;
        console.log(numberOne, numberTwo);
    }

}

module.exports = { SwapNumbersStrategy1, SwapNumbersStrategy2 };