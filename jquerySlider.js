//setInterval();
//$('name').animate({css},animation speed, callback, pause)

$(document).ready(function () {
    var width = 720;
    var currentSlide = 1;
    var animationSpeed = 3000;
    var pause = 5000;

    var interval;

    function startSlider(){
        interval= setInterval(function () {
            $('.slider .slides').animate({ 'margin-left': '-=' + width }, animationSpeed, function () {
                currentSlide++;
                if (currentSlide >= $('.slide').length) {
                    currentSlide = 1;
                    $('.slider .slides').css('margin-left', 0);
                }
            });
        }, pause);
    };
    function stopSlider(){
        clearInterval(interval);
    };

    $('.slider').on('mouseenter', stopSlider).on('mouseleave', startSlider); //Stop the slide on mouse hover
    startSlider();

    $('#button-previous').on('click',function(){
        if(currentSlide==2){
            $('.slider .slides').css('margin-left', 0);
            currentSlide--;
        }else if(currentSlide==3){
            $('.slider .slides').css('margin-left', -720);
            currentSlide--;
        }else if(currentSlide==4){
            $('.slider .slides').css('margin-left', -1440);
            currentSlide--;
        }else if(currentSlide==5){
            $('.slider .slides').css('margin-left', -2160);
            currentSlide--;
        }else{
            $('.slider .slides').css('margin-left', -2880);
            currentSlide=5;
        }
    });

    $('#button-next').on('click',function(){
        if(currentSlide==1){
            $('.slider .slides').css('margin-left', -720);
            currentSlide++;
        }else if(currentSlide==2){
            $('.slider .slides').css('margin-left', -1440);
            currentSlide++;
        }else if(currentSlide==3){
            $('.slider .slides').css('margin-left', -2160);
            currentSlide++;
        }else if(currentSlide==4){
            $('.slider .slides').css('margin-left', -2880);
            currentSlide++;
        }else{
            $('.slider .slides').css('margin-left', 0);
            currentSlide=1;
        }
    });
});