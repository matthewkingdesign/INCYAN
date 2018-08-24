var hidden = $(".research-title, .arrows, #research-description, #research-cta");
hidden.hide();

$(document).ready(function(){
  // Targeting links to slide in individually after hiding them individually.
  $(".main-nav-break").hide().show("slide", { direction: "up" }, 1000);
  $("#main-nav-indago").hide().show("slide", { direction: "right" }, 1000);
  $("#main-nav-contact").hide().show("slide", { direction: "left" }, 1000);
  $("#main-nav-about").hide().show("slide", { direction: "right" }, 1000);
  $("#main-nav-research").hide().show("slide", { direction: "right" }, 1000);
  $("#main-nav-clients").hide().show("slide", { direction: "left" }, 1000);


  $(".research-title").show("slide", { direction: "left" }, 1000);
  $(".arrows, #research-description").fadeIn(1500);
  $("#research-cta").fadeIn(2500);
});
