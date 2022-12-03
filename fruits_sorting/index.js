const	fruits = [
	"🍎",
	"🍊",
	"🍎",
	"🍎",
	"🍊",
	"🍊",
	"🍎",
	"🍊",
	"🍊",
	"🍊",
];

function sort_fruits()
{
	const	apple_shelf_div = document.getElementById("apple_shelf");
	const	orange_shelf_div = document.getElementById("orange_shelf");
	let		idx;

	for (idx = 0 ; idx < fruits.length ; ++idx)
	{
		switch (fruits[idx])
		{
			case "🍎":
				apple_shelf_div.textContent += fruits[idx];
				break;
		
			case "🍊":
				orange_shelf_div.textContent += fruits[idx];
				break;
		}
	}
}

sort_fruits();
