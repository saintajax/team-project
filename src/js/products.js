
  const elements = document.querySelectorAll('[data-card]');

  for (const cardFace of elements) {
    cardFace.addEventListener("click", () =>{
      cardFace.classList.toggle('is-flipped')
    });
  }


