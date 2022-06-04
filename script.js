const mobileNav = document.querySelector("#mobile-menu");

showMenu = () => {
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    }
    else mobileNav.style.display = "block";
}

document.querySelectorAll(".menu-item").forEach(
    item => item.addEventListener("click", () => mobileNav.style.display = "none"));