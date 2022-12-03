function increment()
{
	const counter = document.getElementById("counter_title");

	counter.textContent = Number(counter.textContent) + 1;
}

function save()
{
	const counter = document.getElementById("counter_title");
	const records = document.getElementById("records_paragraph");

	records.textContent += counter.textContent + " ";
}
