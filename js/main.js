$(document).ready(()=>{
    $('.header__burger').click(e =>{
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        
    })
    $('.currency__show').click(function(e){
			$('.currency__show').not($(this)).removeClass('active');
			$('.currency__list').not($(this).next()).slideUp(300);
		$(this).toggleClass('active').next().slideToggle(200);
	});
})