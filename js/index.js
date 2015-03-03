var replace = function (){
    var dTop = $(document).scrollTop();
    var wWidth = $(window).width();
    if(dTop > 350 && wWidth > 1320){
        $(".sidebar").css({"position": 'fixed',"top": 50});
        $(".sidebar").fadeIn();
    }
    else{
        $(".sidebar").fadeOut();
    }
};
replace();
$(window).scroll(function(){
    replace();
});
$(window).resize(function(){
    replace();
});
