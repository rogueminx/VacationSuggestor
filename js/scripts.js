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
    $("#intro-box").hide();
    $("body").css('background-image', 'url(photos/bermudabackground.jpg)');
    $("body").css('background-size', '100%');
    $("body").css('background-repeat', 'no-repeat');
    $("body").css('background-attachment', 'fixed');
    $("#Bermuda").fadeIn(4000);
    $(function(){
      $('#fadein img:gt(0)').hide();
      setInterval(function(){
        $('#fadein :first-child').hide()
           .next('img').fadeIn(2000)
           .end().appendTo('#fadein');},
        4000);
    });
    } else if (dollIsland > snakeIsland && dollIsland > winchester && dollIsland > boneChapel && dollIsland > bermuda) {
      $("#intro-box").hide();
      $("body").css('background-image', 'url(photos/dollislandbackground.jpg)');
      $("body").css('background-size', '100%');
      $("body").css('background-repeat', 'no-repeat');
      $("body").css('background-attachment', 'fixed');
      $("#DollIsland").fadeIn(4000);
      $(function(){
        $('#fadein02 img:gt(0)').hide();
        setInterval(function(){
          $('#fadein02 :first-child').hide()
             .next('img').fadeIn(2000)
             .end().appendTo('#fadein02');},
          4000);
      });
    } else if (boneChapel > snakeIsland && boneChapel > winchester && boneChapel > dollIsland && boneChapel > bermuda) {
      $("#intro-box").hide();
      $("body").css('background-image', 'url(photos/bonesbackground.jpg)');
      $("body").css('background-size', '100%');
      $("body").css('background-repeat', 'no-repeat');
      $("body").css('background-attachment', 'fixed');
      $("#BoneChapel").fadeIn(4000);
      $(function(){
        $('#fadein05 img:gt(0)').hide();
        setInterval(function(){
          $('#fadein05 :first-child').hide()
             .next('img').fadeIn(2000)
             .end().appendTo('#fadein05');},
          4000);
      });
    } else if (snakeIsland > boneChapel && snakeIsland > winchester && snakeIsland > dollIsland && snakeIsland > bermuda) {
      $("#intro-box").hide();
      $("body").css('background-image', 'url(photos/snakeislandbackground.jpg)');
      $("body").css('background-size', '100%');
      $("body").css('background-repeat', 'no-repeat');
      $("body").css('background-attachment', 'fixed');
      $("#SnakeIsland").fadeIn(4000);
      $(function(){
        $('#fadein03 img:gt(0)').hide();
        setInterval(function(){
          $('#fadein03 :first-child').hide()
             .next('img').fadeIn(2000)
             .end().appendTo('#fadein03');},
          4000);
      });
    } else {
      $("#intro-box").hide();
      $("body").css('background-image', 'url(photos/winchesterbackground.jpg)');
      $("body").css('background-size', '100%');
      $("body").css('background-repeat', 'no-repeat');
      $("body").css('background-attachment', 'fixed');
      $("#Winchester").fadeIn(4000);
      $(function(){
        $('#fadein04 img:gt(0)').hide();
        setInterval(function(){
          $('#fadein04 :first-child').hide()
             .next('img').fadeIn(2000)
             .end().appendTo('#fadein04');},
          4000);
      });
    };
    event.preventDefault();
  });
});
