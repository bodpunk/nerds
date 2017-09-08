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

$(function () {
  $(".write-to-us__button").click(function() {
    $(".write-to-us__form").addClass("visible");
  })
});

$(function () {
  $(".form__close").click(function() {
    $(".write-to-us__form").removeClass("visible");
  })
});
