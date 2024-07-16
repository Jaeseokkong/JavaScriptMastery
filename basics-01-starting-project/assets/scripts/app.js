const defaultResult = 0;
let currentResult = defaultResult;

function add () {
    const enteredNumber = parseInt(userInput.value) //+userInput.value; => parseInt의 축약형
    const calcDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
    userInput.value = ''
}

addBtn.addEventListener('click' , add)