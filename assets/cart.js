$(document).ready(function () {
  $("#cart-modal").modal("hide");
  $("#spinner-modal").modal("hide");

  updateCurrencyValue();

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

  function updateCurrencyValue() {
    $(".currency-value").each(function () {
      $(this).text(parseInt($(this).text())/100.0)
    })
  }

  function updateCart(id, quantity) {
    $("#spinner-modal").modal("show");
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
        $("#cart-modal-message").text("Updated Cart");
        $("#icon-success").show();
        $("#icon-failure").hide();
        $("#spinner-modal").modal("hide");
        $("#cart-modal").modal("show");

        if (quantity === 0) {
          $(cartItemId).remove();
        }

        updateCartItemCount(data.item_count);
        var items = data.items

        console.log(data)
        items.forEach(item => {
          $("#price_"+item.id).text(item.final_line_price.toString())
        });

        $("#subtotal-price").text(data.items_subtotal_price)
        $("#total-discount").text(data.total_discount)
        $("#checkout-amount").text(data.total_price)
        updateCurrencyValue();

      },
      error: function (xhr, ajaxOptions, thrownError) {
        $("#cart-modal-message").text(JSON.parse(xhr.responseText).description);
        $("#icon-success").hide();
        $("#icon-failure").show();
        $("#spinner-modal").modal("hide");
        $("#cart-modal").modal("show");

        console.log(e);
      },
    });
  }
  $(".delete").on("click", function (event) {
    updateCart(this.value, 0);
  });
});
