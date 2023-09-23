$(document).ready(function () {
  var variantName = "";
  var variantId = 0;

  var variant = getSelectedVariant();
  console.log(variant.id);
  $("#product-id").val(variant.id);

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

    $("#product-id").val(variant.id);

    if(variant.featured_image){

        $("#featured-image").attr("src", variant.featured_image.src);
    }
    
    $("#price").text(variant.price)
    
  });

  $(".image-small").on("click", function(){

    $("#featured-image").attr("src", this.src);
  })

  $("#increment-quantity").on("click", function(){
    var quantity =  parseInt( $("#quantity-input").val());
    $("#quantity-input").val(quantity+1);
  })

  $("#decrement-quantity").on("click", function(){
    var quantity =  parseInt( $("#quantity-input").val());
    if(quantity-1 >0) {
        $("#quantity-input").val(quantity-1);
    }
    
  })
});
