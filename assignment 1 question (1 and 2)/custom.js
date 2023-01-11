$(document).ready(function () {
  $("#submit").click(function () {
    if ($("#text").val() === "") {
      return alert("Name is  required");
    } else if ($("#password").val() !== $("#cnfrm-psswrd").val()) {
      return alert("passwords should be same");
    } else if ($(".checkbox1").is(":checked", true))
      return alert("Form Submitted succesfully");
    else if ($(".checkbox1").is(":checked", false));
    return alert("terms& conditions are not accepted");
  });
});
