$(function(){
  var keyarts = $('.cat1'),
      $window = $(window);
  $window.scroll(function(){
    var scrollTop = $window.scrollTop();
    keyarts.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
      $this.css('transform', 'translateY(' + val + 'px)');
    });
  });
});



