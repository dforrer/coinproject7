/**
 * Created by Daniel on 06.06.16.
 */


function updateNav () {

    var nav = document.getElementById("nav");

    var headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for ( var i = 0 ; i < headers.length ; i++ ) {

        console.log("Hello World");
        var h = headers[i];

        // give each header a unique id
        h.id = "header" + i;

        // fill in the nav-menu

        switch (h.tagName) {

            case "H1":
                nav.innerHTML += "<li class='no-indent'><a href='#"+ h.id + "'>" + h.innerHTML + "</a></li>";
                break;

            default:
                nav.innerHTML += "<li><a href='#"+ h.id + "'>" + h.innerHTML + "</a></li>";
                break;
        }

    }

}

function bsCarouselAnimHeight()
{
    $('.carousel').carousel({
        interval: 5000
    }).on('slide.bs.carousel', function (e)
    {
        var nextH = $(e.relatedTarget).height();
        $(this).find('.active.item').parent().animate({ height: nextH }, 500);
    });
}

window.onload = function() {
    updateNav();
    bsCarouselAnimHeight();

    // Enable smooth scrolling globally
    // handle links with @href started with '#' only
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $(id).offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });
};
