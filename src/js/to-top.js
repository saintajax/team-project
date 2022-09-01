// var btn = $('#button');

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });


// $(window).scroll(function() {
//   var height = $(window).scrollTop();
//   if (height > 100) {
//       $('#button').fadeIn();
//   } else {
//       $('#button').fadeOut();
//   }
// });
// $(document).ready(function() {
//   $("#button").click(function(event) {
//       event.preventDefault();
//       $("html, body").animate({ scrollTop: 0 }, "slow");
//       return false;
//   });

// });

const mediaDesktop = window.matchMedia("(min-width: 1200px)");
const mediaTablet = window.matchMedia("(max-width: 1199px)");

if(mediaDesktop.matches){


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("button").style.display = "flex";
        document.getElementById("button").style.opacity = "1";
    } else {
        document.getElementById("button").style.opacity = "0";
    }
}

function topFunction(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}
} else(mediaTablet.matches) 
    document.getElementById("button").style.display = "none";
