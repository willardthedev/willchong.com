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

    //video list updating

  $('.video-list ul li a').on('click',function(){
    console.log($(this).attr('id'));
    var whichVideo = $(this).attr('id');
    var theYoutubeId;
    $('.main-video .thevideo').empty();

    if (whichVideo == "ob-video") {
      theYoutubeId = "41NvopnwIq8";
    }
    
    $('.main-video .thevideo').append('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/'+theYoutubeId+'?rel=0&autohide=1" frameborder="0" allowfullscreen></iframe></div>')
  });
  
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