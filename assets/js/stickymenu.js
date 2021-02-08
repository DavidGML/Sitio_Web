$(document).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop()) { 
            $("nav").addClass("cover");
        }
        else {
            $("nav").removeClass("cover");
        }
    });

    $(function() {
        $(".toggle").on("click", function() {
            if ($(".navitem").hasClass("active")) {
                $(".navitem").removeClass("active");
                $(this).find("a").html("<i class='fas fa-bars'></i>");
            } else {
                $(".navitem").addClass("active");
                $(this).find("a").html("<i class='fas fa-times'></i>");
            }
        });
        $(".togglenav").on("click",function() {
            //const icon = document.createElement("i");
            //const btna = document.querySelector(".btnav")

            if ($(".navitem").hasClass("active")) {
                $(".navitem").removeClass("active");
            } 
        });
    });
});