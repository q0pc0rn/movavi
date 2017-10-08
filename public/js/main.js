$(document).ready(function(){
    $('.swap_mode').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('toggle'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) {
          // var swap_mode_class= $(this).attr('class');
          // var a_href = $(scroll_el);
          // console.log($(swap_mode_class));
          // console.log($(a_href));
          var a_class = $(this).find('a');
          $(a_class).onclick();
          console.log(a_class);

            if ( $(swap_mode_class) === $(scroll_el)) {

            };
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
