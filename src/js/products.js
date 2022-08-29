// var card = document.querySelector('.card');
// card.addEventListener('click', function () {
//   card.classList.toggle('is-flipped');
// });

// var card2 = document.querySelector('.card2');
// card2.addEventListener('click', function () {
//   card2.classList.toggle('is-flipped');
// });

// var card3 = document.querySelector('.card3');
// card3.addEventListener('click', function () {
//   card3.classList.toggle('is-flipped');
// });

document.getElementById('card-btn').onclick = function () {
  document.getElementById('card').classList.toggle('is-flipped');
};
document.getElementById('card-btn-off').onclick = function () {
  document.getElementById('card').classList.remove('is-flipped');
};
