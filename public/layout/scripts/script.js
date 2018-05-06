$(document).ready(function () {

    $("#toComments").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#comments").offset().top
        }, 1500);
    });

    $("#toSection").click(function () {
        $('html, body').animate({
            scrollTop: $("#section").offset().top
        }, 1500);
    });

    $("#toEz_letter").click(function () {
        $('html, body').animate({
            scrollTop: $("#ez_letter").offset().top
        }, 1500);
    });

    $("#toFooter").click(function () {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 1500);
    });
});