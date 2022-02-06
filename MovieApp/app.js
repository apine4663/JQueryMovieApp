$("#submit").on("click", function (e) {
  e.preventDefault();
  let title = $(".title").val();
  let rating = $(".rate").val();
  $("ul").append(
    "<li>" + title + ": " + rating + " <input type='button' class='remover'>"
  );
  $(".title").val("");
  $(".rate").val("");
});

$("#list").on("click", ".remover", function (evt) {
  $(this).parent().remove();
});
$(".clear").click(function () {
  $(".list").empty();
});
