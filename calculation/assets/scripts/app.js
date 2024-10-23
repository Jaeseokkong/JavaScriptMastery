const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


// input 값 가져오기
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// 계산 로그 작성
function createAndWriteOutput(operator, resultBeforCalc, calcNumber) {
    const calcDescription = `${resultBeforCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription); // from vender file
}

function writeToLog (
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        preResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries)
}

function calculateResult (calculationType) {
    const enteredNumber = getUserNumberInput()

    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber
    ) {
        return;
    }

    // if (
    //     calculationType === 'ADD' || 
    //     calculationType === 'SUBTRACT' || 
    //     calculationType === 'MULTIPLY' || 
    //     calculationType === 'DIVIDE'
    // ) {
    const initialResult = currentResult;
    let mathOperator;

    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType == 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
        
    createAndWriteOutput(mathOperator, initialResult, enteredNumber)
    writeToLog(calculationType, initialResult, enteredNumber, currentResult)
    // }

}


function add () {
    calculateResult('ADD')
}

function subtract () {
    calculateResult('SUBTRACT')
}

function multiply () {
    calculateResult('MULTIPLY')
}

function divide () {
    calculateResult('DIVIDE')
}

function calculate(operation) {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    let operator;

    if (operation === 'ADD') {
        currentResult += enteredNumber;
        operator = '+';
    } else if (operation == 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operator = '*';
    } else if (operation === 'DIVIDE') {
        currentResult /= enteredNumber;
        operator = '/';
    }

    createAndWriteOutput(operator, initialResult, enteredNumber)
    writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click' , calculate.bind(this, 'ADD'))
subtractBtn.addEventListener('click' , calculate.bind(this, 'SUBTRACT'))
multiplyBtn.addEventListener('click' , calculate.bind(this, 'MULTIPLY'))
divideBtn.addEventListener('click' , calculate.bind(this, 'DIVIDE'))