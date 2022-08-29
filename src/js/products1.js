document.getElementById('card2-btn').onclick = function () {
  document.getElementById('card2').classList.toggle('is-flipped');
};
document.getElementById('card2-btn-off').onclick = function () {
  document.getElementById('card2').classList.remove('is-flipped');
};
