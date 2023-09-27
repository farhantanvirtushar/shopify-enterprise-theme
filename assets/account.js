$(document).ready(function () {
  $(".page-index").each(function () {
    var pageIndex = $(this).attr("href");
    var queryParams = { ...Shopify.queryParams };
    queryParams["page"] = pageIndex;
    $(this).attr(
      "href",
      location.pathname + "?" + new URLSearchParams(queryParams).toString()
    );
  });

  $(".next-page").each(function () {
    var currentPage = parseInt($(this).attr("href"));
    var pageIndex = (currentPage + 1).toString();
    var queryParams = { ...Shopify.queryParams };
    queryParams["page"] = pageIndex;
    $(this).attr(
      "href",
      location.pathname + "?" + new URLSearchParams(queryParams).toString()
    );
  });

  $(".previous-page").each(function () {
    var currentPage = parseInt($(this).attr("href"));
    var pageIndex = (currentPage - 1).toString();
    var queryParams = { ...Shopify.queryParams };
    queryParams["page"] = pageIndex;
    $(this).attr(
      "href",
      location.pathname + "?" + new URLSearchParams(queryParams).toString()
    );
  });
});
