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
        $('#p1').css('visibility', 'visible');
        $('#t1').css('visibility', 'visible');
    }, function () {
        $('#photo1').css('opacity', '1');
        $('#p1').css('visibility', 'hidden');
        $('#t1').css('visibility', 'hidden');
    });
});

$(function () {
    $('#photo2').hover(function () {
        $('#photo2').css('opacity', '0.9');
        $('#p2').css('visibility', 'visible');
        $('#t2').css('visibility', 'visible');
    }, function () {
        $('#photo2').css('opacity', '1');
        $('#p2').css('visibility', 'hidden');
        $('#t2').css('visibility', 'hidden');
    });
});

$(function () {
    $('#photo3').hover(function () {
        $('#photo3').css('opacity', '0.9');
        $('#p3').css('visibility', 'visible');
        $('#t3').css('visibility', 'visible');
    }, function () {
        $('#photo3').css('opacity', '1');
        $('#p3').css('visibility', 'hidden');
        $('#t3').css('visibility', 'hidden');
    });
});

$(function () {
    $('#photo4').hover(function () {
        $('#photo4').css('opacity', '0.9');
        $('#p4').css('visibility', 'visible');
        $('#t4').css('visibility', 'visible');
    }, function () {
        $('#photo4').css('opacity', '1');
        $('#p4').css('visibility', 'hidden');
        $('#t4').css('visibility', 'hidden');
    });
});