const addOneBtn_button = document.getElementById("addOneBtn");
const subOneBtn_button = document.getElementById("subOneBtn");
const quantityCount_p = document.getElementById("quantityCount");
const hiddenMessage_p = document.getElementById("hiddenMessage");
const searchButton_button = document.getElementById("search-btn");
const searchInputField_input = document.getElementById("search-field");

searchInputField_input.addEventListener("mouseenter", function () {
    searchInputField_input.placeholder = "this doesn't work...";
    searchInputField_input.addEventListener("mouseleave", function () {
        searchInputField_input.placeholder = "Search";
    })
});


function addOne(e) {
    var num = parseInt(e.innerHTML);
    if (num < 100) {
        e.innerHTML++;
    } else if (num === 100) {
        hiddenMessage_p.innerHTML = "That's enough...";
        setTimeout(function () {
            hiddenMessage_p.innerHTML = "";
        }, 1000);
    }
}

function subOne(e) {
    var num = parseInt(e.innerHTML);
    if (num > 0) {
        e.innerHTML--;
    } else if (num === 0) {
        hiddenMessage_p.innerHTML = "You can't go negative... c'mon, man...";
        setTimeout(function () {
            hiddenMessage_p.innerHTML = "";
        }, 1000);
    }
}

addOneBtn_button.addEventListener("click", function () {
    addOne(quantityCount_p);
});

subOneBtn_button.addEventListener("click", function () {
    subOne(quantityCount_p);
});