$(function() {
    // navigation menu toggle function
    $('.menu-tab').click(function() {
      $('.wrapper').toggleClass('reveal-nav');
    });

    //intro page image gif effect
    var layer = 1;
    setInterval(function(){
      $('.layer:eq('+layer+')').css("visibility", "visible");
      layer++;

      if(layer == 17) {
        layer = 1;
        $('.layer:gt(0)').css("visibility", "hidden");
      }
    }, 500);
});
