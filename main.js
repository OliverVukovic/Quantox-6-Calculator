// -----  calculate  -----

function calculate(num){
    
    var result = document.getElementById("inputbox");
    result.value += num;
}

function result(){
    var result = document.getElementById("inputbox");
   // result.value = eval(result.value);    

    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert("ERROR!");
    }
}

function clr(){
    var result = document.getElementById("inputbox");
    result.value = " ";
}

function del() {
    var result = document.getElementById("inputbox");
    result.value = result.value.slice(0, -1);
}



// -----  change mode ----- 

function changeMode(value)
{
    var color = document.body.style.backgroundColor;
    switch(value) {
        case 'mode-1':
            color = "mode-1";
        break;
        case 'mode-2':
            color = "mode-2";
        break;
        case 'mode-3':
            color = "mode-3";
        break;
    }
    document.body.classList = color;
}















/*   ------------------------------------------------------------

class Calculator {
    constructor(previousTextElement, currentTextElement) {
        this.previousTextElement = previousTextElement
        this.currentTextElement = currentTextElement
        this.clear()
    }

    clear() {
        this.current = ''
        this.previous =
        this.operation = undefined
    }
    
    delete() {
        this.current = this.current.toString().slice(0, -1)
    }
    
    appendNumber(number) {
        if (number === '.' && this.current.includes('.')) return
        this.current = this.current.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.current === '') return
        if (this.previous !== '') {
            this.compute()
        }
        this.operation = operation
        this.previous = this.current
        this.current = ''
    }

    compute() {
        let computation
        const x = parseFloat(this.previous)
        const z = parseFloat(this.current)
        if (isNaN(x) || isNaN(y)) return
        switch (this.operation) {
            case '+':
                computation = x + y
                break
            case '-':
                computation = x - y
                break
            case 'x':
                computation = x * y
                break
            case '/':
                computation = x / y
                break
            default:
                return
        }
        this.current = computation
        this.operation = undefined
        this.previous = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        } if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentTextElement.innerText = this.getDisplayNumber(this.current)
        if (this.operation != null) {
            this.previousTextElement.innerText = `${this.getDisplayNumber(this.previous)} ${this.operation}`
        } else {
            this.previousTextElement.innerText = ''
        }    
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')

const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousTextElement = document.querySelector('[previous-data]')
const currentTextElement = document.querySelector('[current-data]')

const calculator = new Calculator(previousTextElement, currentTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button,innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button,innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
*/