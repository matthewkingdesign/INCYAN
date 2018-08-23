$(document).ready(function(){
  // Targeting links to slide in individually after hiding them individually.
  $(".main-nav-break").hide().show("slide", { direction: "up" }, 1000);
  $("#main-nav-indago").hide().show("slide", { direction: "right" }, 1000);
  $("#main-nav-contact").hide().show("slide", { direction: "left" }, 1000);
  $("#main-nav-about").hide().show("slide", { direction: "right" }, 1000);
  $("#main-nav-research").hide().show("slide", { direction: "right" }, 1000);
  $("#main-nav-clients").hide().show("slide", { direction: "left" }, 1000);
});
