$(document).ready(function()
    {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,         //delay before automatic switching
        pagination: false   //removes buttons at bottom
        });

    var typed = new Typed(".typed", {
        strings: ["Family Man","Computer Science Teacher", "Chess Enthusiast",
         "Amatuer Photographer", "Spartan"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
        });

    });

