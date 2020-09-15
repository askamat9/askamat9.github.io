let darkMode = false;

$(document).ready(function(){
    $("#toggleDark").on("click", function(){
        darkModeToggle();
    });

    $(".read").on("click", function(){
        $(this).parent().toggleClass("showContent");
        const readText = $(this).parent().hasClass("showContent") ? "...Read less" : "...Read more";
        $(this).text(readText);
        $(this).css({"font-weight":"bold"});
    });
});

function darkModeToggle(){
    $(".card").toggleClass("lightBgColor").toggleClass("bg-secondary");
    $("#content").toggleClass("bg-light").toggleClass("bg-dark");
    $(".jumbotron").toggleClass("bg-secondary");
    $("#toggleDark").toggleClass("far fa-moon").toggleClass("fas fa-moon");
    $(".card a").toggleClass("btn-outline-light").toggleClass("btn-outline-dark");
    $(".contactLink").toggleClass("btn-outline-light").toggleClass("btn-outline-dark");
    $("nav").toggleClass("navbar navbar-expand-md navbar-light bg-light").toggleClass("navbar navbar-expand-md navbar-dark bg-dark");
    
    darkMode = darkMode ? false : true;
    if(darkMode){
        $("body").css({
            "background-color":"#333333",
            "color":"white"
        });
        $("div hr").css({
            "border-top": "1px solid rgba(0, 0, 0, .4)"
        });
    } else{
        $("body").css({
            "background-color":"white",
            "color":"black"
        });
        $("div hr").css({
            "border-top": "1px solid rgba(0, 0, 0, .1)"
        });
    }
}