$('.nav-item').hover(function(){
    $(this).closest('li').find('.navbar-nav__sub').css({'opacity':0,'margin-top':15}).show().animate({'margin-top':0,'opacity':1},300);
},function(){
    $(this).closest('li').find('.navbar-nav__sub').fadeOut(200,function(){
         $(this).hide();   
    });
});