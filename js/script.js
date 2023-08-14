let slideIndex = 0;

setInterval(() => {
  showSlides();
}, 3000 * 6);
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}

const input = document.querySelector("input");

input.addEventListener("focus", function () {
  input.classList.add("active-placeholder");
});

input.addEventListener("blur", function () {
  input.classList.remove("active-placeholder");
});

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let number = document.querySelector(".number").value;
  let subject = document.querySelector(".subject").value;
  let content = document.querySelector("#content").value;
  const div = document.querySelector(".response");

  await fetch("http://localhost:3000/send", {
    body: JSON.stringify({
      name,
      email,
      number,
      subject,
      content,
    }),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).catch((err) => console.log(err));

  div.innerHTML = "<p>Sucess!</p>";

  name = "";
  email = "";
  number = "";
  subject = "";
  content = "";
});

function hiddeBtn() {
  let element = document.getElementById("container-hidden");
  element.classList.toggle("hidden");
}

document.getElementById("menu").onclick = () => {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menu.innerHTML = "X";
  } else {
    menu.innerHTML = "☰";
  }

  document.querySelector(".menu_container").classList.toggle("active");
};
