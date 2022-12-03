const	save_input_button = document.getElementById("save_input_button");
const	text_input = document.getElementById("text_input");
const	leads_unordered_list = document.getElementById("leads_unordered_list");
let		leads = [];

function save_lead()
{
	if (text_input.value !== "")
	{
		const	new_lead = document.createElement("li");

		new_lead.textContent = text_input.value;
		leads_unordered_list.append(new_lead);
		text_input.value = "";
	}
}

save_input_button.addEventListener("click", save_lead);
