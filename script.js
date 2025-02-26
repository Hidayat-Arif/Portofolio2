function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let elements = document.querySelectorAll("section");

  function checkScroll() {
    let triggerBottom = window.innerHeight * 0.8;

    elements.forEach(element => {
      let boxTop = element.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".menu li a").forEach(item => {
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(1.1)";
      item.style.transition = "0.3s";
    });

    item.addEventListener("mouseout", () => {
      item.style.transform = "scale(1)";
    });
  });
});

const text = "Selamat Datang di Portofolio Saya";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.querySelector(".welcome").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const welcomeElement = document.querySelector(".welcome");
  
  if (welcomeElement) { 
    welcomeElement.innerHTML = "";
    typingEffect();
  }
});
