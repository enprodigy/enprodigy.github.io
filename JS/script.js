$(".sand_icon").click(function(){
  $(".mmenu").toggle(430);
  $(".sand_icon i").toggleClass("fa-bars fa-remove");
});
// main slide
  var backgrounds = [
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(images/pcmain.jpg)',
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(images/mobilem.jpg)',
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(images/2.jpg)'];
  var imgIdx = 0;
  function swapBackgrounds() {
    if(++imgIdx >= backgrounds.length) {
      imgIdx = 0;
    }
    $('.pc_mainimg').fadeTo(1000, 0.7,function(){
      $(this).css('background-image',backgrounds[imgIdx]).fadeTo(1000,1);
    });
  }
  setInterval(swapBackgrounds, 3000);
  // smooth scroll pc
    // $("a").on('click', function(event) {
    //   if (this.hash !== "") {
    //     event.preventDefault();
    //     var hash = this.hash;
    //     $('html, body').animate({
    //       scrollTop: $(hash).offset().top
    //     }, 900, function(){
    //       window.location.hash = hash;
    //     });
    //   }
    // });
    //
    // $("#smoothBtn").click(function(){
    //   $('html,body').animate({
    //     scrollTop: 0
    //   },800);
    // });

    /**************************************/
    /*      SMOOTH SCROLL FUNCTION        */
    /**************************************/
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 41+'px'
            }, 1000);
            return false;
          }
        }
      });
    });

    // go to top pc
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("smoothBtn").style.display = "block";
        } else {
            document.getElementById("smoothBtn").style.display = "none";
        }
    }
