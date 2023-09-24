function updateCartItemCount(count) {
    $("#cart-item-count").text(count.toString())
}

function getCartItemCount() {
    return parseInt($("#cart-item-count").text())
}

$(document).ready(function () {

    function updateCartItemCount(count) {
        $("#cart-item-count").text(count.toString())
    }

    function getCartItemCount() {
        return parseInt($("#cart-item-count").text())
    }
});
