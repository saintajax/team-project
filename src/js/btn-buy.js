// (() => {
//     const menuBtnBuy = document.querySelector('.button--header');

//     menuBtnBuy.addEventListener("click", () => {

//       menuBtnBuy.classList.toggle("is-left");

//     });
//   })();

document.getElementById('btn-open').onclick = function () {
  document.getElementById('btn-buy').classList.toggle('is-left');
};
