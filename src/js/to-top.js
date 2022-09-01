const mediaDesktop = window.matchMedia('(min-width: 1200px)');
const mediaTablet = window.matchMedia('(max-width: 1199px)');

if (mediaDesktop.matches) {
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      document.getElementById('button').style.display = 'flex';
      document.getElementById('button').style.opacity = '1';
    } else {
      document.getElementById('button').style.opacity = '0';
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
} else mediaTablet.matches;
document.getElementById('button').style.display = 'none';
