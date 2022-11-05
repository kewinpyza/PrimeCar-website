let theme;
window.onload = function () {
  theme = localStorage.getItem("theme");

  if (!theme) {
    localStorage.setItem("theme", "dark");
    setDarkTheme();
  } else if (theme === "light") {
    setLightTheme();
  } else {
    setDarkTheme();
  }

  document.getElementById("theme-switcher").onclick = function () {
    if (localStorage.getItem("theme") === "dark") {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };
};

function setLightTheme() {
  document.getElementById("theme-switcher").removeAttribute("checked");
  document.body.style.backgroundColor = "#e3e3e3";
  document.getElementById("mainNavbar").style.borderBottom =
    "2px solid #630000";
  document.getElementById("about").style.borderTop = "2px solid #630000";
  document.getElementById("slides").style.borderTop = "2px solid #630000";
  document.getElementById("footer").style.color = "#630000";
  document.getElementById("footer").style.borderTop = "2px solid #630000";
  document.getElementById("about-us").style.color = "#630000";
  document.getElementById("slide-carousel").style.color = "#630000";
  document.getElementById("code-gif").src = "images/bentley.jpg";
  document.getElementById("audioM").pause();
  document.getElementById("volume-icon").classList.add("d-none");
  document.getElementById("volume-none-icon").classList.remove("d-none");

  document.querySelectorAll(".carousel-item").forEach((item) => {
    item.setAttribute("data-bs-interval", 30000);
  });

  document.querySelectorAll(".brand-item").forEach((item) => {
    item.classList.add("light");
  });

  document.querySelectorAll(".brand-model").forEach((item) => {
    item.classList.add("light-simple");
  });

  document.querySelectorAll(".nav-link").forEach((item) => {
    item.style.color = "#630000";
  });

  document.querySelectorAll(".navbar-brand").forEach((item) => {
    item.style.color = "#630000";
  });

  localStorage.setItem("theme", "light");
}

function setDarkTheme() {
  document.body.style.backgroundColor = "#000000";
  document.getElementById("mainNavbar").style.borderBottom =
    "1px solid #2e3cff";
  document.getElementById("about").style.borderTop = "1px solid #2e3cff";
  document.getElementById("footer").style.color = "#2e3cff";
  document.getElementById("footer").style.borderTop = "1px solid #2e3cff";
  document.getElementById("about-us").style.color = "#2e3cff";
  document.getElementById("code-gif").src =
    "https://media3.giphy.com/media/VXiH9ANZrMLio/giphy.gif?cid=790b7611cd453a0eaa830e54af131c0b50f85c63b374c282&rid=giphy.gif&ct=g";
  document.getElementById("audioM").play();
  document.getElementById("volume-icon").classList.remove("d-none");
  document.getElementById("volume-none-icon").classList.add("d-none");

  document.querySelectorAll(".carousel-item").forEach((item) => {
    item.removeAttribute("data-bs-interval");
  });

  document.querySelectorAll(".brand-item").forEach((item) => {
    item.classList.remove("light");
  });

  document.querySelectorAll(".brand-model").forEach((item) => {
    item.classList.remove("light-simple");
  });

  document.querySelectorAll(".nav-link").forEach((item) => {
    item.style.color = "#2e3cff";
  });

  document.querySelectorAll(".navbar-brand").forEach((item) => {
    item.style.color = "#2e3cff";
  });

  localStorage.setItem("theme", "dark");
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > 1) {
    document.getElementById("audioM").play();
  }
  window.onscroll = null;
};
