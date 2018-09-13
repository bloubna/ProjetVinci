window.onscroll = function() {
    showUp();
    showRight();
}

function showUp() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("showOnScroll").className = "showOnScroll d-flex justify-content-center";
    } else {
        document.getElementById("showOnScroll").className = "hiddenEl";
    }
}

function showRight() {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        document.getElementById("showOnScroll2").className = "showOnScroll2 d-flex justify-content-center w-100";
    } else {
        document.getElementById("showOnScroll2").className = "hiddenEl";
    }
}