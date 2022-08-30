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


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("button").style.display = "block";
    } else {
        document.getElementById("button").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}