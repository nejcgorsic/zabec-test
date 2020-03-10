$('.nav-item').hover(function () {
    $(this).closest('li').find('.navbar-nav__sub').css({
        'opacity': 0,
        'margin-top': -10
    }).show().animate({
        'margin-top': 0,
        'opacity': 1
    }, 300);

}, function () {
    $(this).closest('li').find('.navbar-nav__sub').fadeOut(200, function () {
        $(this).hide();
    });
});


$('.toggle').click(function (e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});