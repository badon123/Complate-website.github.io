$(document).ready(function(){

//stikey menu
$(".js--services").waypoint(function(direction){
    if (direction == "down"){
        $("nav").addClass("sticky");
    }else{
        $("nav").removeClass("sticky");
    }
});


    //mixitup(portfolio)
    var mixer = mixitup('.contener');
});