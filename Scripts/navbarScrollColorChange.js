if (window.matchMedia("(min-width: 768px)").matches) {{
    $(document).ready(function(){
        $(window).scroll(function() { // check if scroll event happened
            if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
                $(".fixed-top").css("background-color", "#123456"); // if yes, then change the color of class "fixed-top" (of which there is only 1 - the navbar) to a nice shade of blue
            } else {
                $(".fixed-top").css("background-color", "rgb(18, 52, 86, 0.2)"); // if not, change it back to original color
            }
        });
    });    
}}