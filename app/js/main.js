
//left sidebar
$(" .b-menu__item-arrow").click(function(){
    $("#menu-remove").toggleClass("remove-menu");
    $("#menu-remove").removeClass("active-menu");
    $("#remove-arrow").toggleClass("active-menu");
    $("#active-arrow").toggleClass("remove-menu");
    $("#active-arrow").removeClass("active-menu");
    if ( screen.width < 992 ){
        $("#tab-row").toggleClass("col-md-1");
        $("#tab-content1").toggleClass("col-md-11");
        $("#tab-content2").toggleClass("col-md-11");
    }
    if ( screen.width > 992 ){
        $("#tab-row").toggleClass("col-lg-1");
        $("#tab-content1").toggleClass("col-lg-11");
        $("#tab-content2").toggleClass("col-lg-11");
    }
});
$("#remove-arrow").click(function(){
  $("#menu-remove").toggleClass("active-menu");
  $("#menu-remove").removeClass("remove-menu");
  $("#active-arrow").toggleClass("active-menu");
  $("#active-arrow").removeClass("remove-menu");
  $("#remove-arrow").toggleClass("remove-menu");
  $("#remove-arrow").removeClass("active-menu");
  if ( screen.width < 992 ){
    $("#tab-row").removeClass("col-md-1");
    $("#tab-content1").removeClass("col-md-11");
    $("#tab-content2").removeClass("col-md-11");
}
if ( screen.width > 992 ){
    $("#tab-row").removeClass("col-lg-1");
    $("#tab-content1").removeClass("col-lg-11");
    $("#tab-content2").removeClass("col-lg-11");
}
});


//sticky top
window.onscroll = function () {
  if ($(document).scrollTop() >= 30) {
      $(".b-header__box-top").addClass("b-header__box-small");
  } else {
      $(".b-header__box-top").removeClass("b-header__box-small");
  }
};

//tab-menu
$("#tab-1").click(function(){
  $("#tab-content2").css("display","none")
  $("#tab-content1").css("display","block")
});

$("#tab-2").click(function(){
  $("#tab-content1").css("display","none")
  $("#tab-content2").css("display","block")
});

//accordion-menu
(function($) {
    $('.b-accordion .b-accordion__link-item').click(function(j) {
        var dropDown = $(this).closest('li').find('.b-accordion__content');
        $(this).closest('.b-accordion').find('.b-accordion__content').not(dropDown).slideUp();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.b-accordion').find('.b-accordion__link-item.active').removeClass('active');
            $(this).addClass('active');
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
})(jQuery);