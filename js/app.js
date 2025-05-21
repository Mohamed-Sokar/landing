new Swiper("#swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#nav-next",
    prevEl: "#nav-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // make breakpoint at 950px or less (i.e. 949px or less) and set slidesPerView to 1
    600: {
      slidesPerView: 2,
    },
    // make breakpoint at 600px or less (i.e. 599px or less) and set slidesPerView to 1
    950: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  var icon = document.getElementById("icon");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  // toggle class active on icon
  icon.classList.toggle("activeIcon");
}

window.addEventListener("scroll", function () {
  const headerContainer = document.getElementsByClassName("headerContainer")[0];
  if (window.scrollY > 0) {
    headerContainer.classList.add("scrolled");
  } else {
    headerContainer.classList.remove("scrolled");
  }
  if (this.window.scrollY > 50) {
    headerContainer.classList.add("scrolledBy50");
  } else {
    headerContainer.classList.remove("scrolledBy50");
  }
});
