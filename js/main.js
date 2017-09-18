// Карусель
$(document).ready(function(){
  $(".owl-carousel").owlCarousel( {
    items: 1,
    margin: 10,
    slideBy: 1,
    loop: true,
    navText: ["",""],
    autoplay: true
  });
});

// Открытие и закрытие формы "Напишите нам"
$(function () {
  $(".on-map-block__button").click(function() {
    $(".write-to-us__form").addClass("visible");
  })
});

$(function () {
  $(".form__close").click(function() {
    $(".write-to-us__form").removeClass("visible");
  })
});

// Подключаем слайдер и связываем его с числовыми инпутами
$(function() {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 15000,
    values: [ 0, 15000 ],
    step: 100,
    slide: function( event, ui ) {
      $( ".number__input--from" ).attr("value", ui.values[ 0 ]);
      $( ".number__input--from" ).val(ui.values[ 0 ]);
      $( ".number__input--to" ).attr("value", ui.values[ 1 ]);
      $( ".number__input--to" ).val(ui.values[ 1 ]);
    }
  });
});

// Связываем числовые инпуты со слайдером
$(function() {
  $(".number__input--from").focusout(function () {
    if (this.value <= 15000 && this.value <= parseInt($(".number__input--to").attr("value"))) {
      $( ".number__input--from" ).attr("value", this.value);
      $("#slider-range").slider({
        values: [ $(".number__input--from").attr("value"), $(".number__input--to").attr("value") ]
      })
    } else {
      this.value = $( ".number__input--from" ).attr("value")
    }
  });
});

$(function() {
  $(".number__input--to").focusout(function () {
    if (this.value <= 15000 && this.value >= parseInt($(".number__input--from").attr("value"))) {
      $( ".number__input--to" ).attr("value", this.value);
      $("#slider-range").slider({
        values: [ $(".number__input--from").attr("value"), $(".number__input--to").attr("value") ]
      })
    } else {
      this.value = $( ".number__input--to" ).attr("value")
    }
  });
});
