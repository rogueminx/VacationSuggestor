var bermuda = 0;
var snakeIsland = 0;
var boneChapel = 0;
var winchester = 0;
var dollIsland = 0;

$(document).ready(function() {
  $("#vacationPicker").submit(function (event) {
    var name = $("input#Name").val();
    var heat = $("input:radio[name=Heat]:checked").val();
    var kids = $("input:radio[name=Kids]:checked").val();
    var travel = $("input:radio[name=Travel]:checked").val();
    var animals = $("input:radio[name=Animal]:checked").val();
    var history = $("input:radio[name=History]:checked").val();
    var lost = $("input:radio[name=Lost]:checked").val();

    $(".nameOutput").text(name);

    if (animals === "yes"){
      snakeIsland += 1;
    }

    if (heat === "3"){
      bermuda += 1;
      snakeIsland += 1;
    } else if (heat === "2") {
      boneChapel += 1;
      dollIsland += 1;
    } else {
      winchester += 1;
    }

    if (kids === "3"){
      dollIsland += 2;
      winchester += 1;
    } else if (kids === "2") {
      bermuda += 1;
    } else {
      snakeIsland += 1;
      boneChapel += 1;
    }

    if (travel === "yes"){
      snakeIsland += 1;
      boneChapel += 1;
      dollIsland += 1;
      bermuda += 1;
    } else {
      winchester += 1;
    }

    if (history === "yes"){
      boneChapel += 1;
      winchester += 1;
    } else {
      snakeIsland += 1;
      dollIsland += 1;
      bermuda += 1;
    }

    if (lost === "yes"){
      bermuda += 2;
      winchester += 1;
      snakeIsland += 1;
    } else {
      boneChapel += 1;
      dollIsland += 1;
    }

    debugger;
    if (bermuda > snakeIsland && bermuda > winchester && bermuda > boneChapel && bermuda > dollIsland) {
    $("#intro-box").fadeOut(2000);
    $("body").css('background-image', 'url(photos/bermudabackground.jpg)');
    $("body").css('background-size', '100%');
    $("body").css('background-repeat', 'no-repeat');
    $("body").css('background-attachment', 'fixed');
    $("#Bermuda").slideDown(2000);
    } else if (dollIsland > snakeIsland && dollIsland > winchester && dollIsland > boneChapel && dollIsland > bermuda) {
    $("#Bermuda").hide();
    $("#DollIsland").show();
    $("#SnakeIsland").hide();
    $("#Winchester").hide();
    $("#BoneChapel").hide();
    } else if (boneChapel > snakeIsland && boneChapel > winchester && boneChapel > dollIsland && boneChapel > bermuda) {
    $("#Bermuda").hide();
    $("#DollIsland").hide();
    $("#SnakeIsland").hide();
    $("#Winchester").hide();
    $("#BoneChapel").show();
    } else if (snakeIsland > boneChapel && snakeIsland > winchester && snakeIsland > dollIsland && snakeIsland > bermuda) {
    $("#Bermuda").hide();
    $("#DollIsland").hide();
    $("#SnakeIsland").show();
    $("#Winchester").hide();
    $("#BoneChapel").hide();
    } else {
    $("#Bermuda").hide();
    $("#DollIsland").hide();
    $("#SnakeIsland").hide();
    $("#Winchester").show();
    $("#BoneChapel").hide();
    };
    event.preventDefault();
  });

  $(function(){
    $('#fadein img:gt(0)').hide();
    setInterval(function(){
      $('#fadein :first-child').hide()
         .next('img').fadeIn(2000)
         .end().appendTo('#fadein');},
      4000);
  });
});
