var canvas = document.getElementById("Board");
var cxt = canvas.getContext("2d");

cxt.rotate(90 * Math.PI/180)


// hexagon
function drawHex(size, xcenter, ycenter) {
  var numberOfSides = 6,
      size = size,
      Xcenter = xcenter,
      Ycenter = ycenter;

  cxt.beginPath();
  cxt.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

  for (var i = 1; i <= numberOfSides;i += 1) {
      cxt.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  cxt.strokeStyle = "#000000";
  cxt.lineWidth = 1;
  cxt.stroke();
}

// To go 1 right is 0, -87
// To go to bottom left +75, +43

// Row 1
drawHex(50, 200, -290);
drawHex(50, 200, -377);
drawHex(50, 200, -464);

// Row 2
drawHex(50, 275, -247);
drawHex(50, 275, -334);
drawHex(50, 275, -421);
drawHex(50, 275, -508);

// Row 3
drawHex(50, 350, -203);
drawHex(50, 350, -290);
drawHex(50, 350, -377);
drawHex(50, 350, -464);
drawHex(50, 350, -551);

// Row 4
drawHex(50, 425, -247);
drawHex(50, 425, -334);
drawHex(50, 425, -421);
drawHex(50, 425, -508);

// Row 5
drawHex(50, 500, -290);
drawHex(50, 500, -377);
drawHex(50, 500, -464);

function locate_spots() {
  wheat_image = new Image();
  wheat_image.onload = function() {
    cxt.drawImage(wheat_image, 170, -320, 60, 60); // 0 a.k.a. the top left
    cxt.drawImage(wheat_image, 170, -408, 60, 60); // 1
    cxt.drawImage(wheat_image, 170, -496, 60, 60); // 2

    cxt.drawImage(wheat_image, 245, -277, 60, 60); // 11
    cxt.drawImage(wheat_image, 245, -365, 60, 60); // 12
    cxt.drawImage(wheat_image, 245, -453, 60, 60); // 13
    cxt.drawImage(wheat_image, 245, -541, 60, 60); // 3

    cxt.drawImage(wheat_image, 320, -233, 60, 60); // 10
    cxt.drawImage(wheat_image, 320, -321, 60, 60); // 17
    cxt.drawImage(wheat_image, 320, -409, 60, 60); // 18
    cxt.drawImage(wheat_image, 320, -497, 60, 60); // 14
    cxt.drawImage(wheat_image, 320, -585, 60, 60); // 4

    cxt.drawImage(wheat_image, 395, -277, 60, 60); // 9
    cxt.drawImage(wheat_image, 395, -365, 60, 60); // 16
    cxt.drawImage(wheat_image, 395, -453, 60, 60); // 15
    cxt.drawImage(wheat_image, 395, -541, 60, 60); // 5

    cxt.drawImage(wheat_image, 470, -320, 60, 60); // 8
    cxt.drawImage(wheat_image, 470, -408, 60, 60); // 7
    cxt.drawImage(wheat_image, 470, -496, 60, 60); // 6 a.k.a the bottom right

  }
  wheat_image.src = "brick.png";
}

// locate()

function create_board() {
  wheat_sizex = 60;
  wheat_sizey = 60;

  var wheat_locs = [[170, -320], [170, -408], [170, -496], [245, -541], [320, -585], [395, -541], [470, -496], [470, -408], [470, -320], [395, -277], [320, -233], [245, -277], [245, -365], [245, -453], [320, -497], [395, -453], [395, -365], [320, -321], [320, -409]];


  var order = ['ore', 'sheep', 'wheat', 'ore', 'sheep', 'brick', 'wheat', 'wood', 'sheep', 'wheat', 'brick', 'desert', 'brick', 'wood', 'wood', 'sheep', 'wood', 'ore', 'wheat']


  // Thanks to http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  function drawResources(order) {
    num_wheat = 4;
    num_brick = 3;
    num_wood = 4;
    num_ore = 3;
    num_sheep = 4;
    num_desert = 1;

    var wheat_index = 0;
    var brick_index = 0;
    var wood_index = 0;
    var ore_index = 0;
    var sheep_index = 0;
    var desert_index = 0;

    var game_wheat = [];
    var game_brick = [];
    var game_wood = [];
    var game_ore = [];
    var game_sheep = [];
    var game_desert = [];

    for (var i = 0; i < 19; i++) {
      resource = order[i]
      if (resource == "wheat") {
        game_wheat[wheat_index] = wheat_locs[i]
        wheat_index = wheat_index + 1
      }
      if (resource == "brick") {
        game_brick[brick_index] = wheat_locs[i]
        brick_index = brick_index + 1
      }
      if (resource == "wood") {
        game_wood[wood_index] = wheat_locs[i]
        wood_index = wood_index + 1
      }
      if (resource == "ore") {
        game_ore[ore_index] = wheat_locs[i]
        ore_index = ore_index + 1
      }
      if (resource == "sheep") {
        game_sheep[sheep_index] = wheat_locs[i]
        sheep_index = sheep_index + 1
      }
      if (resource == "desert") {
        game_desert[desert_index] = wheat_locs[i]
        desert_index = desert_index + 1
      }
    }

    brick_image = new Image();
    wheat_image = new Image();
    wood_image = new Image();
    ore_image = new Image();
    sheep_image = new Image();
    desert_image = new Image();

    wheat_image.src = "wheat.png";
    brick_image.src = "brick.png";
    wood_image.src = "wood.png";
    ore_image.src = "ore.png";
    sheep_image.src = "sheep.png";
    desert_image.src = "desert.png";

    wheat_image.onload = function() {
      cxt.drawImage(wheat_image, game_wheat[0][0], game_wheat[0][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(wheat_image, game_wheat[1][0], game_wheat[1][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(wheat_image, game_wheat[2][0], game_wheat[2][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(wheat_image, game_wheat[3][0], game_wheat[3][1], wheat_sizex, wheat_sizey);

      cxt.drawImage(brick_image, game_brick[0][0], game_brick[0][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(brick_image, game_brick[1][0], game_brick[1][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(brick_image, game_brick[2][0], game_brick[2][1], wheat_sizex, wheat_sizey);

      cxt.drawImage(wood_image, game_wood[0][0], game_wood[0][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(wood_image, game_wood[1][0], game_wood[1][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(wood_image, game_wood[2][0], game_wood[2][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(wood_image, game_wood[3][0], game_wood[3][1], wheat_sizex, wheat_sizey);

      cxt.drawImage(ore_image, game_ore[0][0], game_ore[0][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(ore_image, game_ore[1][0], game_ore[1][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(ore_image, game_ore[2][0], game_ore[2][1], wheat_sizex, wheat_sizey);

      cxt.drawImage(sheep_image, game_sheep[0][0], game_sheep[0][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(sheep_image, game_sheep[1][0], game_sheep[1][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(sheep_image, game_sheep[2][0], game_sheep[2][1], wheat_sizex, wheat_sizey);
      cxt.drawImage(sheep_image, game_sheep[3][0], game_sheep[3][1], wheat_sizex, wheat_sizey);

      cxt.drawImage(desert_image, game_desert[0][0], game_desert[0][1], wheat_sizex, wheat_sizey)
    }

  }

  order = shuffle(order)
  drawResources(order)
}

create_board()
