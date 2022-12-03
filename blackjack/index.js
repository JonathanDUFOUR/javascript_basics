const	main_message_paragraph = document.getElementById("main_message_paragraph");
const	cards_paragraph = document.getElementById("cards_paragraph");
const	sum_paragraph = document.getElementById("sum_paragraph");
const	player_informations_paragraph = document.getElementById("player_informations_paragraph");
let		message;
let		cards;
let		sum;
let		player = {
	name: "Bob",
	chips: 100,
	print_hello: function() {
		console.log("Hello");
	}
};

function get_random_card()
{
	const	card = Math.floor(Math.random() * 13) + 2;

	if (card > 11)
		return 10;
	else
		return card;
}

function get_main_message_from_sum()
{
	if (sum < 21)
		return "Do you want to draw another card ?";
	else if (sum == 21)
		return "You have a blackjack !";
	else
		return "You are out of the game !";
}

function render_game()
{
	message = get_main_message_from_sum();
	main_message_paragraph.textContent = message;
	cards_paragraph.textContent = "Cards: " + cards;
	sum_paragraph.textContent = "Sum: " + sum;
}

function render_player_informations()
{
	player_informations_paragraph.textContent = player.name + ": " + player.chips + "$";
}

function start_game()
{
	const	first_card = get_random_card();
	const	second_card = get_random_card();
	
	cards = [
		first_card,
		second_card,
	];
	sum = cards[0] + cards[1];

	render_game();
}

function new_card()
{
	if (sum !== undefined && sum < 21)
	{
		const	new_card = get_random_card();
	
		cards.push(new_card);
		sum += new_card;
	
		render_game();
	}
}

render_player_informations();
