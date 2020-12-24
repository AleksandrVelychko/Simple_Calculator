'use strict';

(function ($) {
  let total = $('.total'); 

  $( document ).ready(function() {
    $('#1, #2, #3, #4, #5, #5, #6, #7, #8, #9, #plus, #minus, #multiply, #divide, #dot').click(function () {
      let n = $(this).val();
      let result = $('.total').val($('.total').val() + n);
    });

    $('#queal').click(function () {
      total.val(eval(total.val()));
    });

    $('#clear').click(function () {
      total.val('');
    });

    $('#backspace').click(function(){
      total.val($('.total').val().substring(0, total.val().length - 1));
    });
});
})(jQuery);
