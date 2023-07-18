const numberInput = document.getElementById('input__1')
const numberInputWithValue = document.getElementById('input__2')
const myButtonWithPlusOperand = document.getElementById('plus')
const myButtonWithMinusOperand = document.getElementById('minus')
const myButtonWithMultiplyOperand = document.getElementById('multiply')
const myButtonWithDivideOperand = document.getElementById('divide')
const myButtonThatCalculates = document.getElementById('calculate')
const resultElement = document.getElementById('result')


myButtonWithPlusOperand.onclick = function () {
	action = '+'
}
myButtonWithMinusOperand.onclick = function () {
	action = '-'
}
myButtonWithMultiplyOperand.onclick = function () {
	action = '*'
}
myButtonWithDivideOperand.onclick = function () {
	action = '/'
}

printResult = (result) => {
	if (result < 0) {
		resultElement.style.color = 'red'
	} else {
		resultElement.style.color = 'green'
	}
	resultElement.textContent = result
}

calculationOfNumber = (input1, input2, actionSymbol) => {
	const number1 = Number(input1.value)
	const number2 = Number(input2.value)


	if (actionSymbol == '+') {
		return number1 + number2
	}

	if (actionSymbol == '-') {
		return number1 - number2
	}

	if (actionSymbol == '*') {
		return number1 * number2
	}

	if (actionSymbol == '/') {
		return number1 / number2
	}
}


myButtonThatCalculates.onclick = () => {
	const result = calculationOfNumber(input1, input2, action)
	printResult(result)
}