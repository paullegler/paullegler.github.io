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
  resource_sizex = 60;
  resource_sizey = 60;
  number_sizex = 30;
  number_sizey = 30;

  var resource_locs = [[170, -320], [170, -408], [170, -496], [245, -541], [320, -585], [395, -541], [470, -496], [470, -408], [470, -320], [395, -277], [320, -233], [245, -277], [245, -365], [245, -453], [320, -497], [395, -453], [395, -365], [320, -321], [320, -409]];
  var number_locs  = [[185, -305], [185, -393], [185, -481], [260, -526], [335, -570], [410, -526], [485, -481], [485, -393], [485, -305], [410, -262], [335, -218], [260, -262], [260, -350], [260, -438], [335, -482], [410, -438], [410, -350], [335, -306], [335, -394]];

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

    var desert_location = 0; // place on board where desert is

    for (var i = 0; i < 19; i++) {
      resource = order[i]
      if (resource == "wheat") {
        game_wheat[wheat_index] = resource_locs[i]
        wheat_index = wheat_index + 1
      }
      if (resource == "brick") {
        game_brick[brick_index] = resource_locs[i]
        brick_index = brick_index + 1
      }
      if (resource == "wood") {
        game_wood[wood_index] = resource_locs[i]
        wood_index = wood_index + 1
      }
      if (resource == "ore") {
        game_ore[ore_index] = resource_locs[i]
        ore_index = ore_index + 1
      }
      if (resource == "sheep") {
        game_sheep[sheep_index] = resource_locs[i]
        sheep_index = sheep_index + 1
      }
      if (resource == "desert") {
        game_desert[desert_index] = resource_locs[i]
        desert_index = desert_index + 1
        desert_location = i
      }
    }

    var zeros = []
    var twos = []
    var threes = []
    var fours = []
    var fives = []
    var sixes = []
    var eights = []
    var nines = []
    var tens = []
    var elevens = []
    var twelves = []

    zero_index = 0
    two_index = 0
    three_index = 0
    four_index = 0
    five_index = 0
    six_index = 0
    eight_index = 0
    nine_index = 0
    ten_index = 0
    eleven_index = 0
    twelve_index = 0

    var values = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11] // tiles with letters
    val = 0
    for (var index = 0; index < 19; index++) {
      if (index != desert_location) {
        if (values[val] == 2) {
          twos[two_index] = number_locs[index]
          two_index = two_index + 1
        }
        if (values[val] == 3) {
          threes[three_index] = number_locs[index]
          three_index = three_index + 1
        }
        if (values[val] == 4) {
          fours[four_index] = number_locs[index]
          four_index = four_index + 1
        }
        if (values[val] == 5) {
          fives[five_index] = number_locs[index]
          five_index = five_index + 1
        }
        if (values[val] == 6) {
          sixes[six_index] = number_locs[index]
          six_index = six_index + 1
        }
        if (values[val] == 8) {
          eights[eight_index] = number_locs[index]
          eight_index = eight_index + 1
        }
        if (values[val] == 9) {
          nines[nine_index] = number_locs[index]
          nine_index = nine_index + 1
        }
        if (values[val] == 10) {
          tens[ten_index] = number_locs[index]
          ten_index = ten_index + 1
        }
        if (values[val] == 11) {
          elevens[eleven_index] = number_locs[index]
          eleven_index = eleven_index + 1
        }
        if (values[val] == 12) {
          twelves[twelve_index] = number_locs[index]
          twelve_index = twelve_index + 1
        }
        val = val + 1
      }
      else {
        zeros[zero_index] = 0
      }
    }

    brick_image = new Image();
    wheat_image = new Image();
    wood_image = new Image();
    ore_image = new Image();
    sheep_image = new Image();
    desert_image = new Image();

    two = new Image();
    three = new Image();
    four = new Image();
    five = new Image();
    six = new Image();
    eight = new Image();
    nine = new Image();
    ten = new Image();
    eleven = new Image();
    twelve = new Image();

    wheat_image.src = "wheat.png";
    brick_image.src = "brick.png";
    wood_image.src = "wood.png";
    ore_image.src = "ore.png";
    sheep_image.src = "sheep.png";
    desert_image.src = "desert.png";

    two.src = "two.png"
    three.src = "three.png"
    four.src = "four.png"
    five.src = "five.png"
    six.src = "six.png"
    eight.src = "eight.png"
    nine.src = "nine.png"
    ten.src = "ten.png"
    eleven.src = "eleven.png"
    twelve.src = "twelve.png"

    wheat_image.onload = function() {
      cxt.drawImage(wheat_image, game_wheat[0][0], game_wheat[0][1], resource_sizex, resource_sizey);
      cxt.drawImage(wheat_image, game_wheat[1][0], game_wheat[1][1], resource_sizex, resource_sizey);
      cxt.drawImage(wheat_image, game_wheat[2][0], game_wheat[2][1], resource_sizex, resource_sizey);
      cxt.drawImage(wheat_image, game_wheat[3][0], game_wheat[3][1], resource_sizex, resource_sizey);

      cxt.drawImage(brick_image, game_brick[0][0], game_brick[0][1], resource_sizex, resource_sizey);
      cxt.drawImage(brick_image, game_brick[1][0], game_brick[1][1], resource_sizex, resource_sizey);
      cxt.drawImage(brick_image, game_brick[2][0], game_brick[2][1], resource_sizex, resource_sizey);

      cxt.drawImage(wood_image, game_wood[0][0], game_wood[0][1], resource_sizex, resource_sizey);
      cxt.drawImage(wood_image, game_wood[1][0], game_wood[1][1], resource_sizex, resource_sizey);
      cxt.drawImage(wood_image, game_wood[2][0], game_wood[2][1], resource_sizex, resource_sizey);
      cxt.drawImage(wood_image, game_wood[3][0], game_wood[3][1], resource_sizex, resource_sizey);

      cxt.drawImage(ore_image, game_ore[0][0], game_ore[0][1], resource_sizex, resource_sizey);
      cxt.drawImage(ore_image, game_ore[1][0], game_ore[1][1], resource_sizex, resource_sizey);
      cxt.drawImage(ore_image, game_ore[2][0], game_ore[2][1], resource_sizex, resource_sizey);

      cxt.drawImage(sheep_image, game_sheep[0][0], game_sheep[0][1], resource_sizex, resource_sizey);
      cxt.drawImage(sheep_image, game_sheep[1][0], game_sheep[1][1], resource_sizex, resource_sizey);
      cxt.drawImage(sheep_image, game_sheep[2][0], game_sheep[2][1], resource_sizex, resource_sizey);
      cxt.drawImage(sheep_image, game_sheep[3][0], game_sheep[3][1], resource_sizex, resource_sizey);

      cxt.drawImage(desert_image, game_desert[0][0], game_desert[0][1], resource_sizex, resource_sizey)

      cxt.drawImage(two, twos[0][0], twos[0][1], number_sizex, number_sizey)
      cxt.drawImage(three, threes[0][0], threes[0][1], number_sizex, number_sizey)
      cxt.drawImage(three, threes[1][0], threes[1][1], number_sizex, number_sizey)
      cxt.drawImage(four, fours[0][0], fours[0][1], number_sizex, number_sizey)
      cxt.drawImage(four, fours[1][0], fours[1][1], number_sizex, number_sizey)
      cxt.drawImage(five, fives[0][0], fives[0][1], number_sizex, number_sizey)
      cxt.drawImage(five, fives[1][0], fives[1][1], number_sizex, number_sizey)
      cxt.drawImage(six, sixes[0][0], sixes[0][1], number_sizex, number_sizey)
      cxt.drawImage(six, sixes[1][0], sixes[1][1], number_sizex, number_sizey)
      cxt.drawImage(eight, eights[0][0], eights[0][1], number_sizex, number_sizey)
      cxt.drawImage(eight, eights[1][0], eights[1][1], number_sizex, number_sizey)
      cxt.drawImage(nine, nines[0][0], nines[0][1], number_sizex, number_sizey)
      cxt.drawImage(nine, nines[1][0], nines[1][1], number_sizex, number_sizey)
      cxt.drawImage(ten, tens[0][0], tens[0][1], number_sizex, number_sizey)
      cxt.drawImage(ten, tens[1][0], tens[1][1], number_sizex, number_sizey)
      cxt.drawImage(eleven, elevens[0][0], elevens[0][1], number_sizex, number_sizey)
      cxt.drawImage(eleven, elevens[1][0], elevens[1][1], number_sizex, number_sizey)
      cxt.drawImage(twelve, twelves[0][0], twelves[0][1], number_sizex, number_sizey)
    }

  }

  order = shuffle(order)
  drawResources(order)
}

create_board()
