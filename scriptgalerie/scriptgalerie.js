$(document).ready(function () {
    $('.categories').click(function () {
        var select = $(this).attr('data-filter');
        if (select === 'toutes') {
            $('.image').removeClass("hideclass");
        } else {
            $('.image').not("." + select).addClass("hideclass");
            $('.image').filter("." + select).removeClass("hideclass");
        }
    });
});
