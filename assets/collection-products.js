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


  $(".page-index").each(function () {
    var pageIndex = $(this).attr("href");
    var queryParams = {...Shopify.queryParams};
    queryParams["page"] = pageIndex;
    $(this).attr('href', location.pathname+"?"+new URLSearchParams(queryParams).toString())
  })

  $(".next-page").each(function () {
    var currentPage = parseInt($(this).attr("href"));
    var pageIndex =  (currentPage+1).toString()
    var queryParams = {...Shopify.queryParams};
    queryParams["page"] = pageIndex;
    $(this).attr('href', location.pathname+"?"+new URLSearchParams(queryParams).toString())
  })

  $(".previous-page").each(function () {
    var currentPage = parseInt($(this).attr("href"));
    var pageIndex =  (currentPage-1).toString()
    var queryParams = {...Shopify.queryParams};
    queryParams["page"] = pageIndex;
    $(this).attr('href', location.pathname+"?"+new URLSearchParams(queryParams).toString())
  })
  

  $("#sort-by").on("change", function (e) {
    var value = e.target.value;

    Shopify.queryParams.sort_by = value;
    location.search = new URLSearchParams(Shopify.queryParams).toString();
  });

 
});
