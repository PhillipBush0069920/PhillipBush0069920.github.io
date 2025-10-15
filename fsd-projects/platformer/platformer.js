$(function () {  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400, 600, 100, 10);
createPlatform(500, 500, 10, 300);
createPlatform(510, 700, 10, 10);
createPlatform(550, 570, 100, 10);
createPlatform(900, 500, 300, 10);
createPlatform(900, 400, 1, 100);
createPlatform(1300, 600 ,5 ,1);
createPlatform(790, 300, 100, 10);
createPlatform(190, 300, 500, 10);
createPlatform(200, 200, 400, 10);
createPlatform(600, 100, 1, 100);
createPlatform(1, 700, 100, 10);
createPlatform(800, 700, 100, 10);
createPlatform(1000, 700, 100, 10);
createPlatform(1200, 700, 100, 10);
createPlatform( 300, 700, 100, 10);
    // TODO 3 - Create Collectables
createCollectable("steve", 900, 400);
createCollectable("steve", 200, 200);
createCollectable("steve", 550, 100);
   
    // TODO 4 - Create Cannons
createCannon("left", 130, 2000);
createCannon("top", 600, 1000);
createCannon("right", 800, 1);
   
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});