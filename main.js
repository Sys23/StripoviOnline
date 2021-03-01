//Dodavanje artikala
$(document).ready(function () {
    $(".btn").click(function () {
        var val = parseInt($('#group').find('.badge').text());
        if ($(this).hasClass('btn-danger')) {
            $('#group').find('.badge').text(val - 1);
        } else if ($(this).hasClass('btn-info')) {
            $('#group').find('.badge').text(val + 1);
        }
    });
});
//Nazad na vrh
$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

      // scroll to top
      document.querySelector('.back-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
      });

});