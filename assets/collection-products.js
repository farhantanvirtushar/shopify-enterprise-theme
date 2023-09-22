$(document).ready(function () {
  Shopify.queryParams = {};

  // Preserve existing query parameters
  if (location.search.length) {
    var params = location.search.substr(1).split("&");

    for (var i = 0; i < params.length; i++) {
      var keyValue = params[i].split("=");

      if (keyValue.length) {
        Shopify.queryParams[decodeURIComponent(keyValue[0])] =
          decodeURIComponent(keyValue[1]);
      }
    }
  }

  updatePrices();
  updateProductTypeCheckboxes();
  updateAvailabilityCheckboxes();

  function updatePrices() {
    $("#min-price").val(Shopify.queryParams["filter.v.price.gte"]);
    $("#max-price").val(Shopify.queryParams["filter.v.price.lte"]);
  }

  function updateProductTypeCheckboxes() {
    var product_types = [];

    if (Shopify.queryParams["filter.p.product_type"]) {
      product_types = decodeURIComponent(
        Shopify.queryParams["filter.p.product_type"]
      ).split(",");
    }

    for (var i = 0; i < product_types.length; i++) {
      var checkbox_id = product_types[i];

      $("#" + checkbox_id).attr("checked", true);
    }
  }

  function updateAvailabilityCheckboxes() {
    var availabilities = [];

    if (Shopify.queryParams["filter.v.availability"]) {
      availabilities = decodeURIComponent(
        Shopify.queryParams["filter.v.availability"]
      ).split(",");
    }


    for (var i = 0; i < availabilities.length; i++) {

      var checkbox_id = availabilities[i] === "1" ? "in-stock" : "out-of-stock";

      $("#" + checkbox_id).attr("checked", true);
    }
  }

  $("#sort-by").on("change", function (e) {
    var value = e.target.value;

    Shopify.queryParams.sort_by = value;
    location.search = new URLSearchParams(Shopify.queryParams).toString();
  });

  $(".price-input").on("input", function (e) {
    var min_price = $("#min-price").val();
    var max_price = $("#max-price").val();
    Shopify.queryParams["filter.v.price.gte"] = min_price;
    Shopify.queryParams["filter.v.price.lte"] = max_price;

    location.search = new URLSearchParams(Shopify.queryParams).toString();
  });

  $(".product-type-input").change(function () {
    var type = this.id;
    console.log(Shopify.queryParams["filter.p.product_type"]);
    var product_types = [];

    if (Shopify.queryParams["filter.p.product_type"]) {
      product_types = decodeURIComponent(
        Shopify.queryParams["filter.p.product_type"]
      ).split(",");
    }
    console.log(product_types);
    if (this.checked) {
      product_types.push(type);
    } else {
      console.log("removing : " + type);
      product_types = product_types.filter((item) => item !== type);
      console.log(product_types);
    }
    Shopify.queryParams["filter.p.product_type"] = product_types.join(",");
    location.search = new URLSearchParams(Shopify.queryParams).toString();
  });

  $(".availability-input").change(function () {
    var availability = this.id == "in-stock" ? "1" : "0";
    console.log(Shopify.queryParams["filter.v.availability"]);
    var availabilities = [];

    if (Shopify.queryParams["filter.v.availability"]) {
      availabilities = decodeURIComponent(
        Shopify.queryParams["filter.v.availability"]
      ).split(",");
    }
    console.log(availabilities);
  
    if (this.checked) {
      availabilities.push(availability);
    } else {
      availabilities = availabilities.filter((item) => item !== availability);
    }
    Shopify.queryParams["filter.v.availability"] = availabilities.join(",");
    location.search = new URLSearchParams(Shopify.queryParams).toString();
  });
});
