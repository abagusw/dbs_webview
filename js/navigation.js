var navshow = true;

function navigatePage() {
    $("#content").load("./pages/home.html");//set default content navigation
    $(".navigate").click(function(){
        var page = $(this).data("nav");
        $("#content").load("./pages/"+page+".html");
    });    
}
navigatePage();

function toggleNavigation(){
    if(navshow){
        navshow = false;
        $(".navbar-mobile").hide();
    }else{
        navshow = true;
        $(".navbar-mobile").show();
    }
}