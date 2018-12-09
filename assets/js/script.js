$(document).ready( function() {
    $('main').waypoint(function(direction) {
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else {
           $('nav').removeClass('sticky');
        }
    }, {
       offset: '25%'
   });

           /* Mobile Navigation */
        $('.js--nav-icon').click(function(){
            var nav = $('.js--main-nav');
            var icon = $('.js--nav-icon i');
            nav.slideToggle(200);
            icon.hasClass('ion-md-menu') ? 
                        (icon.removeClass('ion-md-menu'), icon.addClass('ion-md-close')) : 
                        (icon.removeClass('ion-md-close'), icon.addClass('ion-md-menu'));
            
        })

});