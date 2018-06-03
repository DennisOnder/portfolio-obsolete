$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(function () {
    $('#button').hover(function () {
        $('.white-text').css('transition', '0.3s');
        $('.white-text').css('color', '#ffd89b');
        $('#hr').css('transition', '0.3s');
        $('#hr').css('background-color', '#ffd89b');
        $('.a').css('transition', '0.3s');
        $('.a').css('color', '#ffd89b');
    }, function () {
        $('.white-text').css('color', '#fff');
        $('.white-text').css('text-decoration', 'none');
        $('#hr').css('background-color', '#fff');
        $('.a').css('color', '#fff');
    });
});

$(function () {
    $('#photo1').hover(function () {
        $('#photo1').css('opacity', '0.9');
        $('#p1').css('display', 'block');
        $('#t1').css('display', 'block');
    }, function () {
        $('#photo1').css('opacity', '1');
        $('#p1').css('display', 'none');
        $('#t1').css('display', 'none');
    });
});

$(function () {
    $('#photo2').hover(function () {
        $('#photo2').css('opacity', '0.9');
        $('#p2').css('display', 'block');
        $('#t2').css('display', 'block');
    }, function () {
        $('#photo2').css('opacity', '1');
        $('#p2').css('display', 'none');
        $('#t2').css('display', 'none');
    });
});

$(function () {
    $('#photo3').hover(function () {
        $('#photo3').css('opacity', '0.9');
        $('#p3').css('display', 'block');
        $('#t3').css('display', 'block');
    }, function () {
        $('#photo3').css('opacity', '1');
        $('#p3').css('display', 'none');
        $('#t3').css('display', 'none');
    });
});

$(function () {
    $('#photo4').hover(function () {
        $('#photo4').css('opacity', '0.9');
        $('#p4').css('display', 'block');
        $('#t4').css('display', 'block');
    }, function () {
        $('#photo4').css('opacity', '1');
        $('#p4').css('display', 'none');
        $('#t4').css('display', 'none');
    });
});