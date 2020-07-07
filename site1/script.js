$(document).ready(function () {
    $('.accordion_title').click(function () {
      $(".accordion_content").not($(this).next()).slideUp(400);
      $(this).next().slideToggle(400);
      $(".accordion_item").not($(this).closest(".accordion_item")).removeClass("open-acc");
      $(this).closest(".accordion_item").toggleClass("open-acc");
    });
  });