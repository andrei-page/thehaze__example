

$(" .b-menu__item-arrow").click(function(){
    $("#menu-remove").addClass("remove-menu");
    if($("#menu-remove").hasClass("remove-menu")){
      $(" .b-menu__item-arrow").click(function(){
        $("#menu-remove").addClass("active-menu");
        $("#menu-remove").removeClass("remove-menu");
      });
    }
     if($("#menu-remove").hasClass("active-menu")){
      $(" .b-menu__item-arrow").click(function(){
        $("#menu-remove").addClass("remove-menu");
        $("#menu-remove").removeClass("active-menu");
      });
    }
   
});


window.onscroll = function () {
  if ($(document).scrollTop() >= 30) {
      $(".b-header__box-top").addClass("b-header__box-small");
  } else {
      $(".b-header__box-top").removeClass("b-header__box-small");
  }
};

// $("#tab-1").click(function(){
//   $("#tab-content2").fadeOut();
//   $("#tab-content1").fadeIn();
// });

// $("#tab-2").click(function(){
//   $("#tab-content1").fadeOut();
//   $("#tab-content2").fadeIn();
// });
