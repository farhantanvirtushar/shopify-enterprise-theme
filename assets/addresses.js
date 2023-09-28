$(document).ready(function () {
    $("#new-address").modal("hide");

    $("#add-new-address").on("click", function(){
        $("#new-address").modal("show");
    })

    $(".edit-address").on("click", function(){
        var id = this.value
        $("#edit_address_"+id).modal("show");
        console.log(id);
    });
  });
  