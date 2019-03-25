{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl280\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Write JavaScript here\
$(document).ready(function() \{\
\
  $('img.plus').on(\{\
    mouseenter: function () \{\
        $(this).parents('.container').addClass('plus-hovered');\
    \},\
    mouseleave: function () \{\
        $(this).parents('.container').removeClass('plus-hovered');\
    \}\
  \});\
\
  $('.drag').on('mousedown', function() \{\
    $(this).draggable();\
    if ($(this).hasClass('plus-hovered')) \{\
      $(this).draggable( "disable" );\
    \}\
    else \{\
      $(this).draggable( "enable" );\
      $('.drag').not(this).css('z-index', '100');\
      $(this).css('z-index', '1000');\
    \}\
  \});\
\
  $('p').hide();\
  $("img.plus").on('click', function() \{\
    var\
		$container = $(this).parents('.container'),\
        openedClass = 'opened',\
        $paragraph = $container.find('p');\
    	$paragraph.slideToggle();\
    if ($container.hasClass(openedClass)) \{\
        $container.removeClass(openedClass);\
    \}\
    else \{\
      $container.addClass(openedClass);\
    \}\
  \});\
\
\});\
\
  $(".x").on('click', function() \{\
      $(this).parent().css("display", "none");\
      $("p").css("display", "none");\
  \})\
}