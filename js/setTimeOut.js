var timer = null;

var startMove = function(iTarget) {
    var sideBar = $('.sidebar');

    clearInterval(timer);

    timer = setInterval(function() {
        var speed = (iTarget - parseInt(sideBar.css('top')))/2;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);

        if(iTarget == parseInt(sideBar.css('top'))) {
            clearInterval(timer);
        }
        else {
            sideBar.css("top",parseInt(sideBar.css('top')) + speed + 'px');
        };
    }, 30);
};

$(window).scroll(function() {
    var sideBar = $('.sidebar');
    var scrollTop = $(window).scrollTop();
    var topPosition = ($(window).height() - sideBar.height())/2 + scrollTop;
    if(scrollTop == 0) {
        topPosition = 500;
    }
    startMove(parseInt(topPosition));
});
