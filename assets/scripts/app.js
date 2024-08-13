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
    create
    console.log(logEntries)
}

function calculateResult (calculationType) {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    let mathOperator;

    if (calculationType === 'add') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else {
        currentResult -= enteredNumber;
        mathOperator = '-';
    }

    createAndWriteOutput('+', initialResult, enteredNumber)
    writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}


function add () {
    calculateResult('ADD')
}

function subtract () {
    calculateResult('SUBTRACT')
}

function multiply () {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber)
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide () {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber)
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click' , add)
subtractBtn.addEventListener('click' , subtract)
multiplyBtn.addEventListener('click' , multiply)
divideBtn.addEventListener('click' , divide)