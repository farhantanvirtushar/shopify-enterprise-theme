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

  

  $("#sort-by").on("change", function (e) {
    var value = e.target.value;

    Shopify.queryParams.sort_by = value;
    location.search = new URLSearchParams(Shopify.queryParams).toString();
  });

 
});
