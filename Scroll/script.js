$(function(){
  var keyarts = $('#keyart-1, #keyart-1b, #keyart-2, #keyart-0,#keyart-3, #keyart-4, #keyart-4b,#keyart-5,#keyart-6, #keyart-8'),
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


$(function(){
  var keyarts = $('#keyart-7'),
      $window = $(window);
  $window.scroll(function(){
    var scrollTop = $window.scrollTop();
    keyarts.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
      $this.css('transform', 'translateX(' + val + 'px)');
    });
  });
});


