function updateCartItemCount(count) {
  $("#cart-item-count").text(count.toString());
}

function getCartItemCount() {
  return parseInt($("#cart-item-count").text());
}

$(document).ready(function () {
  $(".dropdown-toggle").each(function () {
    $(this).click(function (e) {
      var subMenuDisplay = $(this).next().css("display");

      if (subMenuDisplay === "none") {
        $(this).next().css("display", "block");
      } else {
        $(this).next().css("display", "none");
      }
    });
  });

  
  function updateCartItemCount(count) {
    $("#cart-item-count").text(count.toString());
  }

  function getCartItemCount() {
    return parseInt($("#cart-item-count").text());
  }
});
