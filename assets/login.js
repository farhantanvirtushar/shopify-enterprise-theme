$(document).ready(function () {

    $(".forgot-password").on("click", function(){

        $("#login-form").css("display", "none");
        $("#recovery-form").css("display", "block");
    });

    $(".cancel-recovery").on("click", function(){

        $("#login-form").css("display", "block");
        $("#recovery-form").css("display", "none");
    })
  });
  