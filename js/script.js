// input validacija za login
$(".polje").on("focus blur", function (e) {
  $(this).toggleClass("focus");

  if (e.type == "blur" && $(this).val().length == "") {
    $(this).removeClass("greska");
  }
});
$(".polje").on("keyup", function () {
  if ($(this).val().length < 3) {
    $(this).removeClass("uspesno");
    $(this).addClass("greska");
  } else if ($(this).val().length > 20) {
    $(this).removeClass("uspesno");
    $(this).addClass("greska");
  } else {
    $(this).addClass("uspesno");
    $(this).removeClass("greska");
  }
});

// animacija na login stranici
$(document).ready(function () {
  $("img").animate(
    {
      left: "0px",
    },
    500
  );
});
