$('.ui.green.menu')
.on('click', '.item', function() {
  if(!$(this).hasClass('dropdown')) {
    $(this)
      .addClass('active')
      .siblings('.item')
      .removeClass('active');
  }
});


// warning: addClass, removeClass are jQuery method
// you can only use them when the object is created by jQuery
// like this $('.ui.menu a.item'), $(elements[3])
// elements[3] has not such method, it's DOM elements, not object in jQuery

// Warning: when page is refeshed, this does not work
