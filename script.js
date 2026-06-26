const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
const icon = menu.querySelector("i");
const headerContent = document.querySelector(".header-content");

function toggleMenu(forceClose = false) {
  const isOpen = navLinks.classList.contains("active");

  if (forceClose) {
    navLinks.classList.remove("active");
    icon.classList.replace("fa-xmark", "fa-bars");
    return;
  }

  if (isOpen) {
    navLinks.classList.remove("active");
    icon.classList.replace("fa-xmark", "fa-bars");
  } else {
    navLinks.classList.add("active");
    icon.classList.replace("fa-bars", "fa-xmark");
  }
}

menu.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menu.contains(e.target)) {
    toggleMenu(true);
  }
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    toggleMenu(true);
  });
});

window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      headerContent.classList.add("show");
    });
  });

  setTimeout(() => {
    iniciarObserver();
  }, 700);
});

function iniciarObserver() {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // 

    if (scrollY > 100) {
      headerContent.classList.remove("show"); 
      headerContent.classList.add("hide");
    } else {
      headerContent.classList.remove("hide");
      headerContent.classList.add("show");
    }
  });
}

document.getElementById("btnEmail").addEventListener("click", () => {
  navigator.clipboard.writeText("fredeystevn97@gmail.com").then(() => {
    const tooltip = document.getElementById("tooltipEmail");

   
    tooltip.classList.add("visible");

    setTimeout(() => {
      tooltip.classList.remove("visible");
    }, 2000);
  });
});