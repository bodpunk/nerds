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

// Подключаем карту
ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
    center: [59.93915054846753,30.321560552441337],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  }),
// Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark([59.938725259417716,30.323126962506038], {
    hintContent: 'Nёrds',
    balloonContent: 'Санкт-Петербург, ул. Б. Конюшенная, д. 19/8'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/map-marker.png',
    // Размеры метки.
    iconImageSize: [231, 190],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-45, -200]
  });
  myMap.geoObjects.add(myPlacemark)
  //отключаем зум колёсиком мышки
  myMap.behaviors.disable('scrollZoom');
});

// Включаем возможность работы с фильтром страницы "Магазин" без участия мыши(инпуты скрыты)
$(function() {
  $('.templates__filter label').keypress(function (e) {
    if (e.which == 13 || e.which == 32) {
      e.preventDefault();
      this.click()
    }
  })
});
