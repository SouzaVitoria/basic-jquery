$(document).ready(function() {
    $("h2").css("margin", "0");
    $("p").css({ margin: "0", color: "blue" });
    $(".div1").css({
      "margin-bottom": "20px",
      background: "#CCC"
    });

    //Children
    $(".div1 span")
      .hide()
      .delay("1000")
      .fadeIn(1000)
      .css({ color: "green", "font-size": "15px" });

    $(".div1 h2")
      .hide()
      .css({ "font-size": "50px", color: "red" })
      .fadeIn(800);

    //Direct children
    $(".div1 > span").css({ color: "red" });

    //First element after selection
    $(".p1 + p").css({ "font-size": "25px" });

    //All elements after selection
    $(".p1 ~ p").css({ color: "#000" });
  });