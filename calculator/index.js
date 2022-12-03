let	number0;
let	number1;

number0 = 42;
number1 = 0;

document.getElementById("number0").textContent = number0;
document.getElementById("number1").textContent = number1;

function operation(operator)
{
	let	result;

	switch (operator)
	{
		case "+":
			result = number0 + number1;
			break;

		case "-":
			result = number0 - number1;
			break;

		case "*":
			result = number0 * number1;
			break;

		case "/":
			result = number0 / number1;
			break;

		case "%":
			result = number0 % number1;
			break;
	}
	document.getElementById("result").textContent = result;
}
