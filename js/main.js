(function() {

    //run stellar on window / divs need to be anything but static
    $.stellar({
        responsive: true,
        horizontalScrolling: false,
        verticalScrolling: true
    });


    // function scrollToAnchor(aid){
    // var aTag = $("section[name='"+ aid +"']");
    // $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    // }

    // $("#section1").click(function() {
    //    scrollToAnchor('1');
    // });
    // $("#section2").click(function() {
    //    scrollToAnchor('2');
    // });
    // $("#section3").click(function() {
    //    scrollToAnchor('3');
    // });
    // $("#section4").click(function() {
    //    scrollToAnchor('4');
    // });


})();

smoothScroll.init();

