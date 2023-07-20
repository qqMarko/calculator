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

let battonOperand = null

	const eventBattonOperandClick = (event) => {
	const clickedBattonOperand = event.target
	const clickedButtonId = clickedBattonOperand.id

	if (battonOperand === clickedButtonId) {
		return;
		}
		
		const activeButton = document.getElementById(battonOperand)
		if (activeButton) {
			activeButton.classList.remove('active')
		}
		clickedBattonOperand.classList.add('active')
		battonOperand = clickedButtonId
}

myButtonWithPlusOperand.addEventListener('click', eventBattonOperandClick)
myButtonWithMinusOperand.addEventListener('click', eventBattonOperandClick)
myButtonWithMultiplyOperand.addEventListener('click', eventBattonOperandClick)
myButtonWithDivideOperand.addEventListener('click', eventBattonOperandClick)


printResult = (result) => {
	if (!Number.isFinite(result)) {
		resultElement.style.color = 'red'
		resultElement.textContent = 'You cannot divide by zero'
	} else {
		resultElement.style.color = 'green'
		resultElement.textContent = result
	}
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


myButtonThatCalculates.addEventListener('click', () => {
	if (input1.value.trim() === '' || input2.value.trim() === '') {
		input1.classList.add('search-footer__content__input__error')
		input1.setAttribute('placeholder', 'Please enter a number value')
		input2.classList.add('search-footer__content__input__error')
		input2.setAttribute('placeholder', 'Please enter a number value')
	} else {
		input1.classList.remove('search-footer__content__input__error')
		input1.removeAttribute('placeholder')
		input2.classList.remove('search-footer__content__input__error')
		input2.removeAttribute('placeholder')
	}
})


myButtonThatCalculates.onclick = () => {
	if (input1.value.trim() === '' || input2.value.trim() === '') {
		resultElement.style.color = 'red'
		resultElement.textContent = 'Please enter both numbers'
		return
	}

	const result = calculationOfNumber(input1, input2, action,)
	printResult(result)
}


