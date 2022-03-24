$(document).ready(function() {

  // custom input file
  $("form").on("change", ".file-upload-field", function(){
      $(this).parent(".file-upload-wrapper").attr("data-text",
      $(this).val().replace(/.*(\/|\\)/, '') );
  });
  // Fin custom input file

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // END SHOW-HIDE PASSWORD

});
