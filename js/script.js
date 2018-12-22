$(document).ready(function()
    {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,         //delay before automatic switching
        pagination: false   //removes buttons at bottom
        });

    var typed = new Typed(".typed", {
        strings: ["Wannabe Coder", "Chess Enthusiast", "Amatuer Photographer"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
        });

    });

