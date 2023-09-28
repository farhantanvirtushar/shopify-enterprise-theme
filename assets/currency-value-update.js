$(document).ready(function () {
  updateCurrencyValue();

  function updateCurrencyValue() {
    $(".currency-value").each(function () {
      $(this).text(parseInt($(this).text()) / 100.0);
    });
  }
});
