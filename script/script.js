window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("showOnScroll").className = "showOnScroll d-flex justify-content-center";
    } else {
        document.getElementById("showOnScroll").className = "hiddenEl";
    }
}
