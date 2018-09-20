<<<<<<< HEAD
window.onscroll = function () { myFunction() };

function myFunction() {
=======
window.onscroll = function() {
    showUp();
    showRight();
}

function showUp() {
>>>>>>> 4718ff783054717cce76389770d8e662f59b4546
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("showOnScroll").className = "showOnScroll d-flex justify-content-center";
    } else {
        document.getElementById("showOnScroll").className = "hiddenEl";
    }
}
<<<<<<< HEAD
=======

function showRight() {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        document.getElementById("showOnScroll2").className = "showOnScroll2 d-flex justify-content-center w-100";
    } else {
        document.getElementById("showOnScroll2").className = "hiddenEl";
    }
}
>>>>>>> 4718ff783054717cce76389770d8e662f59b4546
