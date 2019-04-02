$(document).ready(function(){
	$('.navigationlLinks li').on('click', function(){
		$(this).toggleClass('active');
		$(this).children('ul').toggleClass('active');
		$(this).children('span').children('i').toggleClass('fa-angle-left');
		$(this).children('span').children('i').toggleClass('fa-angle-down');
	})

	$('.menuToggler').on('click', function(){
		$('body').toggleClass('sidebar-collapse');
		if($('body').hasClass('sidebar-collapse')){
			$('.navigationlLinks').children('li').children('ul').removeClass('active');
		}
	})
})