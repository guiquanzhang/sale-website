let slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-image");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function autoSlide() {
  plusSlides(1);
  setTimeout(autoSlide, 3000);
}

window.onload = function () {
  showSlides(slideIndex);
  autoSlide();
};