$('.list-inline>a').click(function(event) {
	$(this).children('li').not('.border-bottom-none').removeClass('btn-info').toggleClass('border-bottom-none');
	//$(this).parent('ul').parent('#publications').removeClass('btn-info').addClass('border-bottom-none');
	$(this).siblings('li').removeClass('border-bottom-none').addClass('btn-info');
	$(this).siblings('li').children('li').removeClass('border-bottom-none').addClass('btn-info');
	//$('#publications ul a li').removeClass('border-bottom-none').addClass('btn-info');
	$(this).siblings('a').children('li').removeClass('border-bottom-none').addClass('btn-info');
});

$('#publications').hover(function() {
	$(this).children('ul').stop().slideDown(400, function() {
		
	}).css('display','block');
}, function() {
	$(this).children('ul').stop().slideUp(400);
});

// var publications=$('#publications-ul');
// function dropdown(){
// 	publications.stop().slideDown(400, function() {
		
// 	}).css('display', 'block');
// }
// function slideup(){
// 	publications.stop().slideUp(400);//.css('display','none');
// }



$('#publication').hover(function() {
	$(this).children().stop().slideDown(400, function() {
		
	}).css('display', 'block');
}, function() {
	$(this).children().stop().slideUp(400).css('display', 'none');
});
//.not('li#publications')
//.not('#publications')
$('#publications ul a').click(function(event) {
	$(this).children('li').addClass('border-bottom-none').removeClass('btn-info');
	$(this).siblings('a').children('li').removeClass('border-bottom-none').addClass('btn-info');
	$(this).parent('ul').parent('#publications').addClass('border-bottom-none').removeClass('btn-info');
	$(this).parent('ul').parent('#publications').siblings('a').children('li').removeClass('border-bottom-none').addClass('btn-info');
});
$('#publication ul a').click(function(event) {
	$(this).children('li').addClass('border-bottom-none').removeClass('btn-info');
	$(this).siblings('a').children('li').removeClass('border-bottom-none').addClass('btn-info');
	$(this).parent('ul').parent('#publication').addClass('border-bottom-none').removeClass('btn-info');
	$(this).parent('ul').parent('#publication').siblings('a').children('li').removeClass('border-bottom-none').addClass('btn-info');
});