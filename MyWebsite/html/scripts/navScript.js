const dropdownMenu = document.getElementById("dropdown");
const dropdownItem1_a = document.getElementById("AboutMe");
const dropdownItem2_a = document.getElementById("BuyAPrint");
const dropdownItem3_a = document.getElementById("ContactMe");

if (isDropdownActive()) {
    if (!dropdownMenu.classList.contains("active")) {
        dropdownMenu.classList.add("active");
    }
}

function isDropdownActive() {
    return dropdownItem1_a.classList.contains("active") || dropdownItem2_a.classList.contains("active") || dropdownItem3_a.classList.contains("active");
}