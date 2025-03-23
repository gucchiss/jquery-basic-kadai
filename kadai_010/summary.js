$(function () {
  $('#change-color').on({
    'click': () => {
      $('#target').css('color', 'red');
    },
  });
  $('#change-text').on({
    'click': () => {
      $('#target').text('HELLO!')
    },
  });
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});