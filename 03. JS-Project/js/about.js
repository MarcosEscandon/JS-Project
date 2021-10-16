$(document).ready(function(){

    //Theme selector
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    //Scroll up
    $(".goUp").click((e) => {
        e.preventDefault();

        $("html, body").animate({scrollTop: 0}, 500);
    });

    //Fake Login
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");
    if(form_name != null & form_name != "undefined"){
        var about_p = $("#about p");

        about_p.append("<hr><br><strong>Bienvenido, " + form_name +"</strong><br>");
        about_p.append("<br><a href'#' id='logout'>Log Out!</a>")
        
        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear()
            location.reload();
        });
    };

    //Accordion
    $("#accordion").accordion();

});