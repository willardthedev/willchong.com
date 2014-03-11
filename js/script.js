$( document ).ready(function() {
  
  var mobileNavOpen = false;
    
  $('.nav-mobile').on('click', function() {
    
    if (mobileNavOpen == false) {
      $('.nav-mobile a li').css({'display':'block'});
      $('.nav-mobile span').removeClass('glyphicon-chevron-down');
      $('.nav-mobile span').addClass('glyphicon-chevron-up');
      mobileNavOpen = true;
    } else if (mobileNavOpen == true) {
      $('.nav-mobile a li').css({'display':'none'});
      $('.nav-mobile span').removeClass('glyphicon-chevron-up');
      $('.nav-mobile span').addClass('glyphicon-chevron-down');
      mobileNavOpen = false;
    }
  });
    
    
});