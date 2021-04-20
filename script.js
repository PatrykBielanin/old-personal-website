//fade in page at enter
$(document.body).ready(function () {
    $('.container').fadeIn(500);
});

//show "scroll to top button"
$(document).scroll(function() {
    var y = $(this).scrollTop();
    var projectsDiv = $('.projects').position();
    if (y >= projectsDiv.top) {
      $('.scrollTop').fadeIn(300);
    } else{
      $('.scrollTop').fadeOut(300);
    }
});

//scroll to the top on click
$('.scrollTop').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

//scroll to projects on click
$('.projectsButton').click(function () {
  var projectsDiv = $('.projects').position();
  $("html, body").animate({ scrollTop: projectsDiv.top }, 600);
  return false;
});

//fade in divs on scroll
$(document).scroll(function() {
    var y = $(this).scrollTop();
    var wrapper = $('.wrapper').position();
    var project = $('.project:last-child').position();
    var programming = $('.programming').position();

    // fade in projects
    if (y >= wrapper.top) {
        $('.projects').removeClass("hide")
        $('.projects').addClass("show")
    } else{
        $('.projects').addClass("hide")
        $('.projects').removeClass("show")
    }

    //fade in about
    if (y >= project.top){
        $('.about').removeClass("hide")
        $('.about').addClass("show")
    } else{
        $('.about').addClass("hide")
        $('.about').removeClass("show")
    }

    //fade in contact
    if (y >= programming.top){
      $('.contact').removeClass("hide")
      $('.contact').addClass("show")
    } else{
        $('.contact').addClass("hide")
        $('.contact').removeClass("show")
    }
});
