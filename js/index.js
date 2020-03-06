$(document).ready(function() {
    /*
   $("h1").css("color", "#f66");
    $("h1").hide();
    $("h1").delay("1000");
    $("h1").fadeIn("slow");
    $("h1").text("Basic JQuery");
    */

    $("h1")
      .css("color", "#f66")
      .hide()
      .delay("1000")
      .fadeIn("slow")
      .text("now")
      .click(function() {
        $("body").css("background", "#C30");
        $("h1").css("color", "#FFF");
      });

    $("a").css({ color: "red", display: "block" });
    $(".link2").css("color", "green");
    $("#link3").css("color", "#000");
    $("*").css("padding", "1%");
    $("h1, #link3").css("border-bottom", "solid 3px blue");
  });