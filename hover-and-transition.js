$(document).ready(function() {
  $('.ui.raised.segment').hover(function() {
    $(this).transition('jiggle');
  }, function(){});
});

// this code will make the element transiting in 'jiggle' effects when hovered
// should be used with semantic-ui
