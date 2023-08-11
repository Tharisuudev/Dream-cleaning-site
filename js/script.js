let slideIndex = 0

setInterval(() => {
  showSlides()
}, 3000 * 6)
showSlides()
function showSlides() {
  let i
  let slides = document.getElementsByClassName("mySlides")
  let dots = document.getElementsByClassName("dot")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
  setTimeout(showSlides, 5000) // Change image every 2 seconds
}

const input = document.querySelector("input")

input.addEventListener("focus", function () {
  input.classList.add("active-placeholder")
})

input.addEventListener("blur", function () {
  input.classList.remove("active-placeholder")
})


