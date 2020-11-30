// Document ready in forma contratta
$(function() {

//Inidico con la variabile "funzionalita" sia il link così chiamato sulla navbar, sia il sottomenù. Ad entrambi ho dato infatti la stessa classe. Questo serve affinché anche il sottomenù rimanga aperto anche quando il mouse di trova su di esso e non solo sul link. Lo stesso avverrà per gli altri sottomenù.

  var funzionalita = $('.funzionalita') ;
  var funzionalitaSubmenu = $('#submenus_navbar .funzionalita');

  var abbonamenti = $('.abbonamenti') ;
  var abbonamentiSubmenu = $('#submenus_navbar .abbonamenti');

  var chisiamo = $('.chisiamo') ;
  var chisiamoSubmenu = $('#submenus_navbar .chisiamo');

  var aiuto = $('.aiuto') ;
  var aiutoSubmenu = $('#submenus_navbar .aiuto');

  //Funzioni per sottomenù funzionalità

  funzionalita.mouseenter(function() {
    funzionalitaSubmenu.show();
  });

  funzionalita.mouseleave(function() {
    funzionalitaSubmenu.hide();
  });

  //Funzioni per sottomenù abbonamenti

  abbonamenti.mouseenter(function() {
    abbonamentiSubmenu.show();
  });

  abbonamenti.mouseleave(function() {
    abbonamentiSubmenu.hide();
  });

  //Funzioni per sottomenù chi siamo

  chisiamo.mouseenter(function() {
    chisiamoSubmenu.show();
  });

  chisiamo.mouseleave(function() {
    chisiamoSubmenu.hide();
  });

  //Funzioni per sottomenù aiuto

  aiuto.mouseenter(function() {
    aiutoSubmenu.show();
  });

  aiuto.mouseleave(function() {
    aiutoSubmenu.hide();
  });


});
