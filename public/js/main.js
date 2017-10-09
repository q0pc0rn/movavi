$(document).ready(function(){
    $('.swap_mode').click( function(){ // ловим клик по ссылке с классом go_to
	      var scroll_el = $(this).attr('toggle'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) {
          $(`#scroll a[href="${scroll_el}"]`).tab('show');
	        $('html, body').animate({ scrollTop: $('#scroll').offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
 
