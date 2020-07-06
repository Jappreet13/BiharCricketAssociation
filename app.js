$(document).ready(function() {
    $('.carousel').carousel({
      interval: 1200
    })
  });


  $("#fix-this-error").click(function () {
    try {
        alert(this_should_not_show_up_in_the_console);
        console.log("This won't show");
    } catch() {}
});


$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('.nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('.nav').removeClass('navbar-fixed');
    }
  });
});

$(document).on("scroll", function(){
 
  if ($(document).scrollTop() > 80){
      $(".primary-nav").addClass("shrink");
  } else {
      $(".primary-nav").removeClass("shrink");
  }

});



