$('a').click(function(event) {
	$(this).children('li').css({
		'background-color': 'white',
		'color':'black'
	});
	$(this).siblings('a').children('li').css({
		'background-color': 'darkcyan',
		'color': 'white'
	});
});
$('.crud-table td').click(function(event) {
	$(this).css({
		'background-color': '#CCCCFF'
	}).siblings('td').css({
		'background-color': 'white'
	});
});