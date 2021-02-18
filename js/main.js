$(document).ready(()=>{
    $('.header__burger').click(e =>{
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        
    })
})