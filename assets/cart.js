$(document).ready(function () {
  $("#cart-modal").modal("hide");

  $(".image-small").on("click", function () {
    $("#featured-image").attr("src", this.src);
  });


  $(".quantity-input").on("change", function (e) {
    console.log("changed");
    var quantity = parseInt(this.value);
    var id = (this.id.toString().replace("quantity-input_",""));
    updateCart(id, quantity);
  });


  $(".increment-quantity").on("click", function () {
    var itemId = this.value.toString();
    var quantity = parseInt($("#quantity-input_" + itemId).val()) + 1;
    console.log(quantity);
    $("#quantity-input_" + itemId).val(quantity);

    updateCart(this.value, quantity);
  });

  $(".decrement-quantity").on("click", function () {
    var itemId = this.value.toString();
    var quantity = parseInt($("#quantity-input_" + itemId).val()) - 1;
    if (quantity > 0) {
      $("#quantity-input_" + itemId).val(quantity);
      updateCart(this.value, quantity);
    }
  });

  function updateCart(id, quantity) {
    var cartItemId = "#cart_item_" + id.toString();
    $.ajax({
      type: "POST",
      url: "/cart/change.js",
      data: {
        id: id,
        quantity: quantity,
      },
      dataType: "json",
      success: function (data) {
        $(".modal-message").text("Item Removed From Cart");
        $("#icon-success").show();
        $("#icon-failure").hide();
        $("#cart-modal").modal("show");

        if (quantity === 0) {
          $(cartItemId).remove();
        }

        updateCartItemCount(data.item_count);
        console.log(data);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        $(".modal-message").text(JSON.parse(xhr.responseText).description);
        $("#icon-success").hide();
        $("#icon-failure").show();
        $("#cart-modal").modal("show");

        console.log(e);
      },
    });
  }
  $(".delete").on("click", function (event) {
    updateCart(this.value, 0);
  });
});
