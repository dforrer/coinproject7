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

window.onload = function() {
    updateNav();
};
