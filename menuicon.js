function toggleMenu() {
    const navlink = document.getElementById("navlink");
    const searchform = document.querySelector('.search-form');
    
    navlink.classList.toggleMenu("show");
    searchform.classList.toggleMenu("hide");
}