var menu = {};

$(".boxwhite").each(function(i) {
	let name = $(this).find(".dishhead").text();
	if (name == "")
		return;
	name = name.substr(0, name.length - 2);
	let description = $(this).find(".dishcont").text();
	let price = $(this).find(".dishpricelist").text();
	try {
		menuPrice = parseFloat(menuPrice.match(/(?:\$)(\d+\.\d+)/)[1]);
	} catch (err) { }
	
	let category;
	for (i = 0; i < 100; ++i) {
		let current = $(this).prev();
		for (j = 0; j < i; j++) {
			current = current.prev();//.text();
        }
		if (current.hasClass("futitle")) {
			category = current.text();
			if (category)
				break;
        }
    }
	if (!menu[category])
		menu[category] = [];
	
	menu[category].push({
		"name": name,
		"description": description,
		"price": price
    });
});
console.log(JSON.stringify(menu));