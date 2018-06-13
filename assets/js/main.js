/* var links = document.querySelectorAll('.a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        var home = document.getElementById('home');
        home.style.overflow = "auto";
    });
}
*/

//Removed

function smoothScroll(e) {
    if (e == undefined || e == "") return;
    var element = document.getElementById(e);
    element.scrollIntoView({
        behavior: "smooth"
    });
}
