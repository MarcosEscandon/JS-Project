setInterval(function(){
    var watch = moment().format('MMMM DD YYYY, hh:mm:ss a');
    $("#watch").html(watch);
}, 1000);

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