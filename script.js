// Navbar dropdown
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const closeBtn = document.getElementById("closeMobileNav");
  const overlay = document.querySelector(".mobile-nav-overlay");

  toggleBtn.addEventListener("click", function () {
    overlay.classList.remove("d-none");
  });

  closeBtn.addEventListener("click", function () {
    overlay.classList.add("d-none");
  });

  // Klik di luar menu buat nutup
  document.addEventListener("click", function (e) {
    const menuBox = document.querySelector(".mobile-nav-menu");
    const isInsideMenu = menuBox.contains(e.target);
    const isToggleBtn = toggleBtn.contains(e.target);

    if (!isInsideMenu && !isToggleBtn) {
      overlay.classList.add("d-none");
    }
  });
});

// ABOUT HTML
const resumeBtn = document.getElementById("resumeBtn");
const popupBox = document.getElementById("popupBox");
const popupOverlay = document.getElementById("popupOverlay");
const backBtn = document.getElementById("backBtn");

resumeBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent navigation
  popupBox.style.display = "block";
  popupOverlay.style.display = "block";
});

backBtn.addEventListener("click", () => {
  popupBox.style.display = "none";
  popupOverlay.style.display = "none";
});
