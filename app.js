// Write JavaScript here
$(document).ready(function() {
	$('body').hide();

  $('img.plus').on({
    mouseenter: function () {
        $(this).parents('.container').addClass('plus-hovered');
    },
    mouseleave: function () {
        $(this).parents('.container').removeClass('plus-hovered');
    }
  });

  $('.drag').on('mousedown', function() {
    $(this).draggable();
    if ($(this).hasClass('plus-hovered')) {
      $(this).draggable( "disable" );
    }
    else {
      $(this).draggable( "enable" );
      $('.drag').not(this).css('z-index', '100');
      $(this).css('z-index', '1000');
    }
  });

  $('p').hide();
  $("img.plus").on('click', function() {
    var
		$container = $(this).parents('.container'),
        openedClass = 'opened',
        $paragraph = $container.find('p');
    	$paragraph.slideToggle();
    if ($container.hasClass(openedClass)) {
        $container.removeClass(openedClass);
    }
    else {
      $container.addClass(openedClass);
    }
  });

});

  $(".x").on('click', function() {
      $(this).parent().css("display", "none");
      $("p").css("display", "none");
  })
