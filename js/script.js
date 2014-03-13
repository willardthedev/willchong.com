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
  
    var theWidth = $('.main-video').width();
    var theHeight = theWidth*.6304;
    $('.main-video').css({'height': theHeight+"px"});
    $('.main-video').css({'background-size':theWidth});
    //var newTop = (theHeight - (theHeight*.7326))*.7326;
    $('.main-video .thevideo').css({'width': theWidth*.739+"px",'height':theHeight/546*400+"px"});
    var theTop = ($('.main-video').height()-$('.main-video .thevideo').height())*(66/146);
    $('.main-video .thevideo').css({'top': theTop+"px" });

  
  $(window).resize(function(){
    
    var theWidth = $('.main-video').width();
    var theHeight = theWidth*.6304;
    $('.main-video').css({'height': theHeight+"px"});
    $('.main-video').css({'background-size':theWidth});
    //var newTop = (theHeight - (theHeight*.7326))*.7326;
    $('.main-video .thevideo').css({'width': theWidth*.739+"px",'height':theHeight/546*400+"px"});
    //console.log($('.main-video .thevideo').height()/$('.main-video').height());
    //console.log();
    
    var theTop = ($('.main-video').height()-$('.main-video .thevideo').height())*(66/146);
    $('.main-video .thevideo').css({'top': theTop+"px" });
  });
    
});