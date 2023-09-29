$(document).ready(function () {
  $("#country-select").on("change", function () {
    var selectedCountry = $(this).val();
    console.log(selectedCountry);
    $("#country-code").val(selectedCountry);

    $("#localization-form").submit();
  });


  $(window).on("resize", function () {
    var win = $(this); //this = window
    toggleCollapse(win.width());
    
  });


  toggleCollapse($( window ).width());
  
  function toggleCollapse (width) {
    if (width < 800) {
        $(".collapse").each(function () {
          $(this).collapse("hide");
        });
      } else {
        $(".collapse").each(function () {
          $(this).collapse("show");
        });
      }
  }
});
