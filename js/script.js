$(".services_cards_card_desc").on("click", function(){
	var substr = this.innerHTML.substring(0, 50)
	this.innerHTML = substr + " ...";
});

$(".hamburger").on("click", function(){
	$(this).toggleClass("hamburger_active");
	$(".menu_wrapper").toggle();
});


