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
drawHex(50, 200, -290)
drawHex(50, 200, -377)
drawHex(50, 200, -464)

// Row 2
drawHex(50, 275, -247)
drawHex(50, 275, -334)
drawHex(50, 275, -421)
drawHex(50, 275, -508)

// Row 3
drawHex(50, 350, -203)
drawHex(50, 350, -290)
drawHex(50, 350, -377)
drawHex(50, 350, -464)
drawHex(50, 350, -551)

// Row 4
drawHex(50, 425, -247)
drawHex(50, 425, -334)
drawHex(50, 425, -421)
drawHex(50, 425, -508)

// Row 5
drawHex(50, 500, -290)
drawHex(50, 500, -377)
drawHex(50, 500, -464)
