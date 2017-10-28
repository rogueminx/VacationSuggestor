var bermuda = 0;
var snakeIsland = 0;
var boneChapel = 0;
var winchester = 0;
var dollIsland = 0;

$(document).ready(function() {
  $("#vacationPicker").submit(function (event) {
    event.preventDefault();
    debugger;
    var name = $("input#Name").val();
    var heat = $("input:radio[name=Heat]:checked").val();
    var kids = $("input:radio[name=Kids]:checked").val();
    var travel = $("input:radio[name=Travel]:checked").val();
    var animals = $("input:radio[name=Animals]:checked").val();
    var lost = $("input:radio[name=Lost]:checked").val();

    if (animals === "yes"){
      snakeIsland += 10;
    }

    if (heat === "3"){
      bermuda += 1;
      snakeIsland += 1;
    } else if (heat === "2") {
      dollIsland += 1;
      boneChapel += 1;
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
      bermuda += 1;
      dollIsland += 1;
    } else {
      winchester += 1;
    }

    if (history === "yes"){
      boneChapel += 1;
      winchester += 1;
    } else {
      dollIsland += 1;
      bermuda += 1;
      snakeIsland += 1;
    }

    if (lost === "yes"){
      bermuda += 2;
      winchester += 1;
      snakeIsland += 1;
      } else {
      boneChapel += 1;
      dollIsland += 1;
      }
    console.log("Name: " + name);  // for debugging
    console.log("Heat: " + heat);  // for debugging
    console.log("Kids: " + kids);  // for debugging
  });
});
