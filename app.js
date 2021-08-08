
//section 4 acordians
document.querySelectorAll('.acordian__button').forEach(button => {
  button.addEventListener('click', () => {
    const acording_content = button.nextElementSibling;
    button.classList.toggle('acordian__button--active')
    if (button.classList.contains('acordian__button--active')) {
      // const asd=button.nextElementSibling;
      button.style.opacity = '100%';
      acording_content.style.maxHeight = acording_content.scrollHeight + 'px';
      acording_content.style.transition="0.3s ease-in-out"
    }
    else {
      button.style.opacity = '50%';
      acording_content.style.maxHeight = 0;
    }
  })
});

//section 2 slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("images-section-2");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

//section 3 slider
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("section3-slider-main");
  if (n > slides.length) { slideIndex2 = 1 }
  if (n < 1) { slideIndex2 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex2 - 1].style.display = "block";
  slides[slideIndex2 - 1].style.transition = "0.5s ease-in-out"
  // slides[slideIndex2-1].style.justifyContent = "space-between";
}