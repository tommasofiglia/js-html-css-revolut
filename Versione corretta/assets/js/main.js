$(function () {

  var menuDropdown = $('.dropdown_menu');
  var links = $('.right_navbar > ul > li');

  links.mouseenter(function() {
    $(this).children('.dropdown_menu').removeClass('hidden');
  });

  links.mouseleave(function() {
    $(this).children('.dropdown_menu').addClass('hidden');
  });


});

next()
