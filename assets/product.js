$(document).ready(function () {
  var variantName = "";
  var variantId = 0;

  getSelectedVariant();

  function getSelectedVariant() {
    var selectedOptionArray = [];
    options.forEach((option, index) => {
      selectedOptionArray.push(options_values[option]);
    });

    variantName = selectedOptionArray.join(" / ");

    var variant = variants.filter((item) => item.title === variantName)[0];

    variantId = variant.id;
    return variant;
  }

  function getVariantIdFromTitle(variantTitle) {
    variantId = variants.filter((item) => item.title === variantTitle)[0].id;
    return variantId;
  }

  $('input[type=radio]').on("change", function (e) {

    var optionId = this.name;
    var optionValue = this.value;
    options_values[optionId] = optionValue;

    var variant = getSelectedVariant();

    if(variant.featured_image){
        console.log(variant.featured_image.src);
        $("#featured-image").attr("src", variant.featured_image.src);
    }
    
    $("#price").text(variant.price)
    
  });

  $(".image-small").on("click", function(){

    $("#featured-image").attr("src", this.src);
  })
});
