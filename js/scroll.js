$(document).ready(function(){
    var scrollLink = $('.scroll');

    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
           scrollTop: $(this.hash).offset().top
        }, 1000 );
    });

    //active link
    $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function(){
            var sectionOffset = $(this.hash).offset().top -70;
            if(sectionOffset <= scrollbarLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })       
    })
})