//Validation

$("form input[name='birthdate']").datepicker();

$.validate({
    lang: "en",
    errorMessagePosition: "top",
    scrollToTopOnError: true

});

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